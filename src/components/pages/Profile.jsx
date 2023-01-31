import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Profile({currentUser, handleLogout}) {
	// state for the secret message (aka user privilaged data)
	
	const [user, setUser] = useState('')
	
	const navigate = useNavigate()
	
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
					// example POST with auth headers (options are always last argument)
					// await axios.post(url, requestBody (form data), options)
					// set the secret user message in state
					setUser(response.data)
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
			<h1>Hello, {currentUser?.name}</h1>

			<h2>{currentUser?.id}</h2>
			<h2>Here is the secret message that is only availible to users of User App:</h2>

			<h3></h3>
		</div>
	)
}
