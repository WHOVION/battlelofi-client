import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Details from './Details'
import { Link } from 'react-router-dom'


const Events = ({currentUser}) => {

	const [events, setEvents] = useState([]) // array of all events
	const [detailId, setDetailId] = useState('') // id of the last clicked event
	const navigate = useNavigate()

	const redirect = (events) => {
		console.log(events)
		setDetailId(events._id)
		navigate(`/events/${events._id}`)	
	}

	//  this is called a function expression
	// const handleRoute = () => {
	// 	if (!currentUser) {
	// 		navigate('/login')
	// 	} else {
	// 		navigate('/new')
	// 	}
	// }
	
	// show all events
	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events`)
				setEvents(response.data)
				console.log(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchEvents()
	}, []) // empty dependancy array will run this use effect only once

	// map out the events, each will need a onClick that shows their details (set their id in state)
	const eventComponents =  events.map(event => {
		return (
			<div key={`event-${event._id}`}>
				<h3>{event.name}</h3>
				{/* <p>{event.location}</p>
				<p>{event.date}</p>
				<p>{event.time}</p> */}
				<p>{event.gameTitle}</p>
				{/* <p>{event.details}</p> */}
				<button onClick={() => redirect(event)}>Event Details</button>
			</div>
		)
	})

	return ( 
		<div>
			<div>
				<h1>Check out new Events here:</h1>
				<Link to ='/new'>
				<button>Create a new Event</button>
				</Link>
			</div>

			<div style={{display: 'flex'}}>
            	<div style={{width: '50vw'}}>
                	<h2>All Events</h2>
                	{eventComponents}
        		</div>
			</div>
		</div>
	 );
}
 
export default Events;