import logo from '../../logo/Logo.png'
import { Link, BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'


export default function Welcome({ currentUser, setCurrentUser }) {

	const navigate = useNavigate()

	const HandleButtonClick = async() => {
		// if (!currentUser) {
		// 	return <Navigate to="/register" />;
		//   } else {
		// 	return <Navigate to="/events" />;
		//   }
		// }
		if (!currentUser) {
			navigate('/register')
		  } else {
			navigate('/events')
		  }
		}

	return (
		<div>
			<h1>Welcome to</h1>
			<img style={{width: '700px', height: '200px'}} src={logo} />
			<h2 className='aboutP'>BattleLo-Fi is the ultimate destination for gamers to stay updated on the latest gaming events, both locally and remotely. Our platform caters to the gaming community by providing comprehensive information on upcoming events, tournaments, and meetups for their favorite games. Whether you're a casual player or a competitive gamer, BattleLo-Fi makes it easy to discover and participate in the gaming events that matter to you. With our user-friendly interface and robust database of events, you'll never miss out on the action again. Join the BattleLo-Fi community today and stay in the loop for all things gaming.</h2>
				{/* <button onClick={HandleButtonClick}>
					Get Started
				</button> */}
			<button onClick={HandleButtonClick} className="getStarted welcome">Get Started
			</button>
		</div>
	)
}

