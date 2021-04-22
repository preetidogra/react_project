import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import LocalStorage from '../../shared/cache/LocalStorage'

export const SignInView = () => {

	const history = useHistory()
	const [username, setUsername] = useState('preeti ')
	const [, setPassword] = useState('abc')
	const [authenticatedUser, setAuthenticateedUser] = useContext(UserContext)

	const login = () => {
		setAuthenticateedUser(username)
		localStorage.setItem(LocalStorage.username, username)

		history.push(RoutingPath.homeView)
		
	}

	return (

		<div>

			<h1>{authenticatedUser}</h1>
			<input placeholder='enter username' onChange={event => setUsername(event.target.value)} />
			<input placeholder='enter password' type='password' onChange={event => setPassword(event.target.value)} /> <br />

			<button onClick={() => login()}> Sign in  </button>


		</div>
	)

}