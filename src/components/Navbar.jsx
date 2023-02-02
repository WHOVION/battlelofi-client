import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
	 const loggedIn = (
		<>
			
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<div>BattleLo-Fi</div>
				</Link>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/events">
								Events
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/profile">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								<span onClick={handleLogout}>Logout</span>
							</Link>
						</li>	
					</ul>
				
				</div>
			</div>
				
		</>
	 )

	 const loggedOut = (
		<>
			
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<p>BattleLo-fi</p>
				</Link>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/events">
								Events
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/register">
								Register
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link active" aria-current="page">
								Login
							</Link>
						</li>	
					</ul>
				
				</div>
			</div>
		
		</>
	 )

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			{currentUser ? loggedIn : loggedOut}
		</nav>
	)
}