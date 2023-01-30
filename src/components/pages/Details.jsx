import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Details(props) {
	const [event, setEvent] = useState([])
	let { id } = useParams()
	
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
			const reqBody = {
				id: props.currentUser.id,
				event: id
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`, reqBody)
		}catch(err){
			console.log(err)
		}
	}

	console.log('whole state', event.host?.name)


	return (
		<div>
			<h1>{event.name}</h1>
			<h2>Game: {event.gameTitle}</h2>
			<h2>Host: </h2>
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
			

		</div>
	)
}