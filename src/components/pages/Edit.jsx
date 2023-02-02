import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as useNavigate, useParams } from 'react-router-dom'



const Edit = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    // define state
    const [form, setForm] = useState({
        name: '',
        location: '',
        date: '',
        time: '',
        timezone: '',
        gameTitle: '',
        details: ''
    })

    // this function calls the api and gets the event id and its informstion
    // everytime u see 'use' its a react hook, componentDidMount in class
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
	}, [id])


    const handleSubmit = async  e => {
                e.preventDefault()
                try { 
                    // making a put request to backend
                    // whenver we send post/put, we send a req.body
                    await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`, form)
                    // this is the newest things edited
                    // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/events/${id}`)
                    // states now have newest edits 
                    // setForm(response.data)
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

                {/* <button className='' type='submit'>Submit edit</button> */}
				<button className='submit' type='submit'>
					<div className="svg-wrapper-1">
						<div className="fourth">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
						</svg>
						</div>
					</div>
					<span>Confirm</span>
				</button>
            </form>
        </div>
     );
}
 
export default Edit;