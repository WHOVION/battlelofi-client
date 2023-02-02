import { useState, useEffect } from "react";
import axios from "axios";
// some r componentns
// things that start with 'use' r hooks
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom'
import Events from "./Events";


const New = ({currentUser}) => {
	// state that holds the values that the user has typed
		// const [currentUser, setCurrentUser] = useState(null)

		// if (!currentUser) {
		// 	return <Navigate to='/login' />
		// } 
		
		const [form, setForm] = useState({
			name: '',
			location: '',
			date: '',
			time: '',
			timezone: '',
			gameTitle: '',
			details: '',
			// this is the first way to do it
			// host: currentUser?.id
			//this is second way to do it
			host: ''
			
		})  
		// console.log(process.env.REACT_APP_SERVER_URL)

	// invoke the useNavigate hook to get a navigate function to use
	const navigate = useNavigate()

	const handleSubmit = e => {
				e.preventDefault()
				// console.log('create new event')
				// take the form data from the state, post it to the backend with axios
				// axios.post(url to make a request to,{request body }. {options})
				// another way to send id to db, and in the axios, form would be formCopy, and state host would be empty string
				const formCopy = {...form, host:currentUser.id} 
				axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/events`, formCopy)
					.then(response => {
						console.log(response.data)
						// once the backend gets back to use, navigate to the /events route to see all events
						navigate('/events') // like clicking a link for the user
					})
					.catch(console.warn)
					// handle erros 
			}
	if (!currentUser) {
		return <Navigate to='/login' />
	} 
	return ( 
		<div>
			<h1>Create a New Event</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="name"
							placeholder='Name...'
							value={form.name} 
							onChange={e => setForm({...form, name: e.target.value})}
						/>
						<label className="form__label" htmlFor="name">Event Name:</label>
					</div>

					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="gameTitle"
							placeholder='Game Title...'
							value={form.gameTitle} 
							onChange={e => setForm({...form, gameTitle: e.target.value})}
						/>
						<label className="form__label" htmlFor="gameTitle">Game:</label>
					</div>

					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="location"
							placeholder='Location...'
							value={form.location} 
							onChange={e => setForm({...form, location: e.target.value})}
						/>
						<label className="form__label" htmlFor="location">Location:</label>
					</div>

					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="date"
							placeholder='Date...'
							value={form.date} 
							onChange={e => setForm({...form, date: e.target.value})}
						/>
						<label className="form__label" htmlFor="date">Date:</label>
					</div>

					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="time"
							placeholder='Time...'
							value={form.time} 
							onChange={e => setForm({...form, time: e.target.value})}
						/>
						<label className="form__label" htmlFor="time">Time:</label>
					</div>

					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="timezone"
							placeholder='Timezone...'
							value={form.timezone} 
							onChange={e => setForm({...form, timezone: e.target.value})}
						/>
						<label className="form__label" htmlFor="timezone">Timezone:</label>
					</div>
	
					<div className="form__group field">
						<input 
							className="form__field"
							type="text"
							id="details"
							placeholder='Details...'
							value={form.details} 
							onChange={e => setForm({...form, details: e.target.value})}
						/>
						<label className="form__label" htmlFor="details">Details About event:</label>
					</div>

					{/* <button className='button' type='submit'>Create Event</button> */}
					<button className="create" type="submit">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
							<path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
						</svg>
						Create Event
					</button>
				</form>
			</div>
		</div>
	 );
}
 
export default New;
