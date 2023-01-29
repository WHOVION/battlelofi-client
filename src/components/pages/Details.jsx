import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
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
	
	return (
		<div>
			<h1>{event.name}</h1>
			<h2>Game: {event.gameTitle}</h2>
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
			
			

		</div>
	)
}