import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details() {
	const [events, setEvents] = useState([])
	
	useEffect(()=> {
		const fetchEvents = async() => {
			try{
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/events`)
				console.log(response.data)
			}catch(err){
				console.log(err)
			}
		}
	})
	return (
		<div>
			Event Details page
		</div>
	)
}