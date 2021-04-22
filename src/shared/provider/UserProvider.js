import {useState, createContext} from 'react'
import React from 'react'


export const UserContext =  createContext( null)

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
	const [authenticatedUser, setAuthenticateedUser] = useState()
	
	return (
		<UserContext.Provider value = {[authenticatedUser, setAuthenticateedUser]}>
			{children}
		</UserContext.Provider>
	)
}
