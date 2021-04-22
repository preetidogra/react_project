import React from 'react'
import {useContext, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/homeview/HomeView'
import {SignInView} from '../view/signinview/SignInView'
import {ShopView} from '../view/shopview/ShopView'
import {BrandsView} from '../view/brandsview/BrandsView'
import {AccessoriesView} from '../view/accessoriesview/AccessoriesView'
import {NewsView} from '../view/newsview/NewsView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import LocalStorage from '../shared/cache/LocalStorage'
import { SettingsView } from '../view/authenticatedviews/settingsviews/SettingsView'
import {ProfileView} from '../view/authenticatedviews/profileview/ProfileView'

// eslint-disable-next-line react/prop-types
export const Routes = ({children}) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	
	const isUserAunthenticated = () =>{
		const userFromBrowserMemory = localStorage.getItem(LocalStorage.username)
		// information on who is the user who has signed in
		setAuthenticatedUser(userFromBrowserMemory)

	}

	useEffect(() => {
		isUserAunthenticated()
	})
		
	
	return(
		<BrowserRouter>
    		{children}
			<Switch>			

				<Route exact path={'/HOME'} component={HomeView} />			
				<Route exact path={'/BRANDS'} component={BrandsView} />
				<Route exact path={'/NEWS'} component={NewsView} />
				<Route exact path={'/ACCESSORIES'} component={AccessoriesView} />
				<Route exact path={'/signin'} component={SignInView} />
				<Route exact path = {'/SHOP'} component = {ShopView} />		
						
				<Route exact path={RoutingPath.profileView} component={ProfileView} />
				<Route component = {RoutingPath.settingsView}  component = {SettingsView } />  
			</Switch>

		</BrowserRouter>
	)

}