import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Register({ currentUser, setCurrentUser }) {
	// state for the controlled form
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	// submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post fortm data to the backend
			const reqBody = {
				name,
				email, 
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			if (err.response) {
				setMsg(err.response.data.msg)
			}
		}
 	}

	// conditionally render a navigate component
	if (currentUser) {
		return <Navigate to="/profile" />
	}

	return (
		<div>
			<h1>Register for an account:</h1>

			<p>{msg}</p>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form__group field">
    					<input 
							required
							className="form__field"
							type="text"
							id="name"
							placeholder='your username...'
							onChange={e => setName(e.target.value)}
							value={name} 
						/>
						<label className="form__label" htmlFor="name">Name:</label>
					</div>

					<div className="form__group field">
    					<input 
							required
							className="form__field"
							type="text"
							id="email"
							placeholder='your email...'
							onChange={e => setEmail(e.target.value)}
							value={email} 
						/>
						<label className="form__label" htmlFor="email">Email:</label>
					</div>

					<div className="form__group field">
    					<input 
							required
							className="form__field"
							type="text"
							id="password"
							placeholder='password...'
							onChange={e => setPassword(e.target.value)}
							value={password} 
						/>
						<label className="form__label" htmlFor="password">Password:</label>
					</div>

					{/* <button type="submit" className='button'>Register</button> */}
					<button className='register' type='submit'>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Register
						</span>
					</button>
				</form>
			</div>
		</div>
	)
}
