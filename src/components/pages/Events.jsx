import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


const Events = () => {

	const [events, setEvents] = useState([]) // array of all events
	const [detailId, setDetailId] = useState('') // id of the last clicked event

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
				<h3>{event.host}</h3>
				{/* <p>{event.location}</p>
				<p>{event.date}</p>
				<p>{event.time}</p> */}
				<p>{event.gameTitle}</p>
				{/* <p>{event.details}</p> */}
				<button onClick={() => setDetailId(event._id)}>Event Details</button>
			</div>
		)
	})


	return ( 
		<>
		<div>
			<div>
				<h1>Check out new Events here:</h1>
				<Link to='./New'>Create a new event</Link>
				{/* <Route 
				
				{currentUser ? loggedIn : loggedOut}
				/> */}
			</div>

			<div style={{display: 'flex'}}>
            	<div style={{width: '50vw'}}>
                	<h2>All bounties</h2>
                	{eventComponents}
        		</div>
			</div>
			<Router>
				<Routes>
					<Route
					path='/details'
					element={<Details 
						detailId={detailId} 
						setDetailId={setDetailId} 
						// events={events} 
						// setEvents={setEvents} 
						/>}
					/>
				</Routes>
			</Router>
		</div>
		</>
	 );
}
 
export default Events;

// new events, if user is logged in send them to new event page, if not send them to login page

// when user clicks 'see details' save id as prop and send them to Details page

// fix host name


// {currentUser ? loggedIn : loggedOut}