import { useState, useEffect } from "react";
import axios from "axios";
// some r componentns
// things that start with 'use' r hooks
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom'
import Events from "./Events";


const New = ({currentUser}) => {
	// state that holds the values that the user has typed
		// const [currentUser, setCurrentUser] = useState(null)
		
		const [form, setForm] = useState({
			name: '',
			location: '',
			date: '',
			time: '',
			timezone: '',
			gameTitle: '',
			details: '',
			// rsvp:[{}]
			// host: [{
			// 	type: mongoose.Schema.Types.ObjectId,
			// 	ref: 'User'
			//   }],
			//   rsvp: [{
			// 	type: mongoose.Schema.Types.ObjectId,
			// 	ref: 'User'
			//   }]
		})  
		// console.log(process.env.REACT_APP_SERVER_URL)

	// invoke the useNavigate hook to get a navigate function to use
	const navigate = useNavigate()

	const handleSubmit = e => {
				e.preventDefault()
				// console.log('create new event')
				// take the form data from the state, post it to the backend with axios
				// axios.post(url to make a request to,{request body }. {options})
				axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/events`, form)
					.then(response => {
						console.log(response.data)
						// once the backend gets back to use, navigate to the /events route to see all events
						navigate('/events') // like clicking a link for the user
					})
					.catch(console.warn)
					// handle erros 
			}

	// const loggedIn = () => {
		{/* if the user is logged in... */}
	
		// submit handler function that posts the form data from state to the backend
		// const handleSubmit = e => {
		// 	e.preventDefault()
		// 	// console.log('create new event')
		// 	// take the form data from the state, post it to the backend with axios
		// 	// axios.post(url to make a request to,{request body }. {options})
		// 	axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/events`, form)
		// 		.then(response => {
		// 			console.log(response.data)
		// 			// once the backend gets back to use, navigate to the /events route to see all events
		// 			navigate('/') // like clicking a link for the user
		// 		})
		// 		.catch(console.warn)
		// 		// handle errors 
		// }
		// return ( 
		// 	<div>
		// 		<form onSubmit={handleSubmit}>
		// 			<div>
		// 				<label htmlFor='name'>Name:</label>
		// 				<input
		// 					type='text'
		// 					id='name'
		// 					placeholder='Name...'
		// 					value={form.name}
		// 					onChange={e => setForm({...form, name: e.target.value})}
		// 					// automatically add users name to form, so would this be hidden?
		// 				/>
	
		// 				<label htmlFor='location'>Location:</label>
		// 				<input
		// 					type='text'
		// 					id='location'
		// 					placeholder='Location...'
		// 					value={form.location}
		// 					onChange={e => setForm({...form, location: e.target.value})}
		// 				/>
		// 			</div>
	
		// 			<div>
		// 				<label htmlFor='date'>Date:</label>
		// 				<input
		// 					type='text'
		// 					id='date'
		// 					placeholder='Date...'
		// 					value={form.date}
		// 					onChange={e => setForm({...form, date: e.target.value})}
		// 				/>
	
		// 				<label htmlFor='timezone'>Timezone:</label>
		// 				<input
		// 					type='text'
		// 					id='timezone'
		// 					placeholder='Timezone...'
		// 					value={form.timezone}
		// 					onChange={e => setForm({...form, timezone: e.target.value})}
		// 				/>
		// 			</div>
	
		// 			<div>
		// 				<label htmlFor='gameTitle'>Game:</label>
		// 				<input
		// 					type='text'
		// 					id='gameTitle'
		// 					placeholder='Game Title...'
		// 					value={form.gameTitle}
		// 					onChange={e => setForm({...form, gameTitle: e.target.value})}
		// 				/>
	
		// 				<label htmlFor='details'>Details About event:</label>
		// 				<input
		// 					type='text'
		// 					id='details'
		// 					placeholder='Details...'
		// 					value={form.details}
		// 					onChange={e => setForm({...form, details: e.target.value})}
		// 				/>
		// 			</div>
	
		// 			<div>
		// 				<input
		// 					hidden
		// 					type= {''}
		// 					// is this right?
		// 					id='rsvp'
		// 					value={form.rsvp}
		// 				/>
		// 			</div>
	
		// 			<button type='submit'>Create Event</button>
		// 		</form>
		// 	</div>
		//  );
	// }

	//  const loggedOut = () => {
	// 		navigate('./login')
	// 		// /api-v1/login
	// 		// ./api-v1/users/register
	//  }
	//  const redirect = () => {
	// 	navigate('/login')	
	// }
	console.log(currentUser)
	// currentUser ? handleSubmit : navigate('/login')
	if (!currentUser) {
		return <Navigate to='/login' />
	} 
	return ( 
			<div>
			{/* {currentUser ? loggedIn : loggedOut} */}
			{/* {currentUser ? handleSubmit : navigate('./login')} */}
			<div>
				{/* if else statement on this form */}
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='name'>Event Name:</label>
						<input
							type='text'
							id='name'
							placeholder='Name...'
							name='name'
							value={form.name}
							onChange={e => setForm({...form, name: e.target.value})}
						/>
					</div>
	
					<div>
						<label htmlFor='location'>Location:</label>
						<input
							type='text'
							id='location'
							placeholder='Location...'
							location='location'
							value={form.location}
							onChange={e => setForm({...form, location: e.target.value})}
						/>
					
						<label htmlFor='date'>Date:</label>
						<input
							type='text'
							id='date'
							placeholder='Date...'
							date='date'
							value={form.date}
							onChange={e => setForm({...form, date: e.target.value})}
						/>

						<label htmlFor='date'>Time:</label>
						<input
							type='text'
							id='time'
							placeholder='Time...'
							time='time'
							value={form.time}
							onChange={e => setForm({...form, time: e.target.value})}
						/>
	
						<label htmlFor='timezone'>Timezone:</label>
						<input
							type='text'
							id='timezone'
							placeholder='Timezone...'
							timezone='timezone'
							value={form.timezone}
							onChange={e => setForm({...form, timezone: e.target.value})}
						/>
					</div>
	
					<div>
						<label htmlFor='gameTitle'>Game:</label>
						<input
							type='text'
							id='gameTitle'
							placeholder='Game Title...'
							gameTitle='gameTitle'
							value={form.gameTitle}
							onChange={e => setForm({...form, gameTitle: e.target.value})}
						/>
	
						<label htmlFor='details'>Details About event:</label>
						<input
							type='text'
							id='details'
							placeholder='Details...'
							details='details'
							value={form.details}
							onChange={e => setForm({...form, details: e.target.value})}
						/>
					</div>
	
					<div>
						<input
							hidden
							type= ''
							// is this right?
							id='host'
							userId='userId'
							value={currentUser.id}
						/>
					</div>
	
					<button type='submit'>Create Event</button>
				</form>
			</div>
		</div>
	 );
}
 
export default New;
