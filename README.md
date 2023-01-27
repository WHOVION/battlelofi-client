# BattleLo-Fi

## Project Idea and Descriptions
* Welcome to BattleLo-Fi, where you and your mates will never miss out on the next gaming session. Plan, organize and keep in touch with what, where and when. Keep it casual when and set up parties, or step it up and put together a friendly tournament. 

## Technologies
* HTML/CSS
* JavaScript: Node and Express
* React
* MongoDB
* bcrypt and jsonwebtoken for auth
* Bootstrap

## ERDs
<img src='images/ERD.png'>

## Restful Routing Chart
<img src='images/RRC.png'>

## Wireframes
<img src='images/Wireframes.PNG'>

## User Stories
* As a new user, I would like to be able to see all events
* As a new user, I would like to be able to create an account 
* As a user, I would like to be able to log in
* As a user, I would like to be able to see all events/posts
* As a user, I would like to be able to RSVP to an event
* As a user, I would like to be able to add a comment under a specific event
* As a user, I would like to be able to Post an event
* As a user, I would like to be able to Update(Edit) my event
* As a user, I would like to be able to Delete my event
* As a user, if I’m signed in, I would like to be able to log out

## MVP
1. Allow users to register for an account with username, email and password
2. Allow users to log in with email and password, as well as sign out
3. Allow all users(registered or not) to see (get) all events as well as specific event details
4. Allow signed in user to create, update, and delete their own events
5. Allow signed in users to RSVP to events
6. Allow signed in users to comment on events

## Stretch Goals
1. Allow users to send messages to all RSVP’d users for their created event
2. Allow users to receive a notification for reminder of events
3. Allow users to search events by game title (hitting igdb api for images and title names?)
4. Allow users to host different types of events (tournaments, casual gaming, etc.)