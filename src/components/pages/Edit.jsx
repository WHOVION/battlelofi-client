import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom'
import Details from './Details'


const Edit = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    // define state
    // the res is response
    const [form, setForm] = useState({
        name: 'res.name',
        location: 'res.location',
        date: 'res.date',
        time: 'res.time',
        timezone: 'res.timezone',
        gameTitle: 'res.gameTitle',
        details: 'res.details'
    })

    // this function calls the api and gets the event id and its informstion
	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`)
				setForm(response.data)
				console.log(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchEvents()
	}, [])


    const handleSubmit = async  e => {
                e.preventDefault()
                try { 
                    // this calls the 'put' in the server and updates form?
                    await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`, form)
                    // this is the newest things edited
                    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`)
                    // states now have newest edits 
                    setForm(response.data)
                    // redirect user after they submit the edit to events page
                    navigate(`/events/${id}`)
                } catch (err) {
                    console.warn(err)
                }
            }
    return ( 
        // form is the same form as would be when creating a new event
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Event Name:</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Name...'
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
                        value={form.location}
                        onChange={e => setForm({...form, location: e.target.value})}
                    />
                
                    <label htmlFor='date'>Date:</label>
                    <input
                        type='text'
                        id='date'
                        placeholder='Date...'
                        value={form.date}
                        onChange={e => setForm({...form, date: e.target.value})}
                    />

                    <label htmlFor='date'>Time:</label>
                    <input
                        type='text'
                        id='time'
                        placeholder='Time...'
                        value={form.time}
                        onChange={e => setForm({...form, time: e.target.value})}
                    />

                    <label htmlFor='timezone'>Timezone:</label>
                    <input
                        type='text'
                        id='timezone'
                        placeholder='Timezone...'
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
                        value={form.gameTitle}
                        onChange={e => setForm({...form, gameTitle: e.target.value})}
                    />

                    <label htmlFor='details'>Details About event:</label>
                    <input
                        type='text'
                        id='details'
                        placeholder='Details...'
                        value={form.details}
                        onChange={e => setForm({...form, details: e.target.value})}
                    />
                </div>

                <button type='submit'>Submit edit</button>
            </form>
        </div>
     );
}
 
export default Edit;