import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

export default function Profile({currentUser, handleLogout}) {
	// state for the secret message (aka user privilaged data)
	
	const [user, setUser] = useState('')
	const [events, setEvents] = useState([])
	const [rsvp, setRsvp] = useState([])
	const navigate = useNavigate()
	const redirect = (events) => {
		navigate(`/events/${events._id}`)	
	}
	

	// useEffect for getting the user data and checking auth
	useEffect(() => {
		const fetchData = async () => {
				try {
					// get the token from local storage
					const token = localStorage.getItem('jwt')
					// make the auth headers
					const options = {
						headers: {
							'Authorization': token
						}
					}
					// hit the auth locked endpoint
					const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
					setUser(response.data)
					const allEvents = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events`)
					const userEvents = allEvents.data.filter(event => event.host === response.data._id)
					setEvents(userEvents)
					
					const userRsvp = allEvents.data.filter(event => event.rsvp.includes(response.data._id))
					setRsvp(userRsvp)
					
				} catch (err) {
					// if the error is a 401 -- that means that auth failed
					console.warn(err)
					if (err.response) {
						if (err.response.status === 401) {
							// panic!
							handleLogout()
							// send the user to the login screen
							navigate('/login')
						}
					}
				}
			}
			fetchData()
	}, []) // only fire on the first render of this component

	const createdEvents =  events.map(event => {
		return (
			<div className="card" key={`event-${event._id}`}>
				<div className="card__content">
					<div className="card__content-heading">
						<h2>{event.name}</h2>
					</div>
					<div className="card__content-body">
						<p> 
							{event.date}
						</p>
					</div>
					<div className="card__content-footer">
						<button onClick={() => redirect(event)}>Event Details</button>
					</div>
				</div>
			</div>
			// <div className="card" key={`event-${event._id}`}>
			// 	<div className="card-details">
			// 		<p className="text-title">{event.name}</p>
			// 		<p className="text-body">{event.date} at {event.time} {event.timezone}</p>
			// 	</div>
			// 	<button className="card-button" onClick={() => redirect(event)}>Event Details</button>
			// </div>
			// <div key={`event-${event._id}`}>
			// 	<h3>{event.name}</h3>
			// 	<p>{event.date} at {event.time} {event.timezone}</p>
				
			// 	<button onClick={() => redirect(event)}>Event Details</button>
			// </div>
		)
	})
	const rsvpEvents = rsvp.map(event => {
		return(

			<div className="card" key={`event-${event._id}`}>
				<div className="card__content">
					<div className="card__content-heading">
						<h2>{event.name}</h2>
					</div>
					<div className="card__content-body">
						<p> 
							{event.date}
						</p>
					</div>
					<div className="card__content-footer">
						<button onClick={() => redirect(event)}>Event Details</button>
					</div>
				</div>
			</div>

			// <div className="card" key={`event-${event._id}`}>
			// 	<div className="card-details">
			// 		<p className="text-title">{event.name}</p>
			// 		<p className="text-body">{event.date} at {event.time} {event.timezone}</p>
			// 	</div>
			// 	<button className="card-button" onClick={() => redirect(event)}>Event Details</button>
			// </div>
			// <div key={`event-${event._id}`}>
			// 	<h3>{event.name}</h3>
			// 	<p>{event.date} at {event.time} {event.timezone}</p>
				
			// 	<button onClick={() => redirect(event)}>Event Details</button>
			// </div>
		)
	})
	
	
	// useEffect(()=> {
	// 	const fetchUser = async () => {
	// 		try{
	// 			console.log('hello', currentUser?.id) //this one returns undefined on refresh so it becomes undefined in get request url.
	// 			const response2 = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/details/${currentUser?.id}`)
	// 			console.log('this is response data:',response2.data)
	// 			setUser(response2.data)
				
	// 		}catch(err){
	// 			console.log(err)
	// 		}
	// 	}
	// 	fetchUser()
	// },[])

	// console.log('thisid', currentUser?.id) //this returns the correct current user id on refresh
	
	return (
		<div>
			<h1>Hello, {user?.name}</h1>
			<p>Logged in: {user?.email}</p>

			<div style = {{display: 'flex'}}>
				<div style = {{width:'50vw'}}>
					<h3>Created Events</h3>
					{createdEvents}
				</div>
				<div style = {{width: '50vw'}}>
					<h3>RSVP'd events</h3>
					{rsvpEvents}
				</div>

			</div>
		</div>
	)
}
