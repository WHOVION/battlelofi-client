import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

export default function Details(props) {
	const [event, setEvent] = useState([])
	let { id } = useParams()
	const navigate = useNavigate()
	const [isHost, setIsHost] = useState(null)
	const [isRSVP, setIsRSVP] = useState(null)
	const [didRSVP, setDidRSVP] = useState(null)
	const yes = (
		<>
			<p>You are the Host</p>
		</>
	)
	const yesRSVPd = (
		<>
			<p>You are already RSVP'd to this event</p>
		</>
	)
	const yesRSVP = (
		<>
			<p>You have just RSVPd!</p>
		</>
	)
	const no = (
		<>
			<p></p>
		</>
	)
	
	useEffect(()=> {
		const fetchEvents = async() => {
			try{
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`)
				setEvent(response.data)
				
			}catch(err){
				console.log(err)
			}
		}
		fetchEvents()
	},[])
	

	const handleRSVPClick = async() => {
		try{
			if(!props.currentUser){
				navigate(`/login`)
			}
			if(props.currentUser.id === event.host?._id){
				setIsHost(true)		
			} else if(event.rsvp.includes(props.currentUser.id)){
				setIsRSVP(true)
			} else {
				setDidRSVP(true)
			}
			const reqBody = {
				id: props.currentUser.id,
				event: id
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`, reqBody)
		}catch(err){
			console.log(err)
		}
	}

	
	return (
		<div>
			<h1>{event.name}</h1>
			<h2>Game: {event.gameTitle}</h2>
			<h2>Host: {event.host?.name}</h2>
			<div>
				<h3>Date and Time:</h3>
				<p>{event.date} at {event.time} {event.timezone}</p>
			</div>
			<div>
				<h3>Location:</h3>
				<p>{event.location}</p>
			</div>
			<div>
				<h3>Details:</h3>
				<p>{event.details}</p>
			</div>
			<button onClick={handleRSVPClick}>RSVP</button>

			{isHost ? yes : no}
			{isRSVP ? yesRSVPd : no}
			{didRSVP ? yesRSVP : no}
			

		</div>
	)
}