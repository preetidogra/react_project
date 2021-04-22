import './ProfileDropDown.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import LocalStorage from '../../../shared/cache/LocalStorage'


export const ProfileDropDown=()=> {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory ()

	const logout = () => {
		setAuthenticatedUser(false)
		localStorage.removeItem(LocalStorage.username)
		history.push(RoutingPath.homeView)
    
	}
	// empty string: true,

	return(

		<div className ='profileDropDownWrapper'>
			<p>Firstname Lastname </p> <br />
			<p>email@email.email</p> <br />
			<hr />
			
			<p onClick ={() => history.push(RoutingPath.profileView)} >Profile</p> <br />
			<p onClick ={() => history.push(RoutingPath.settingsView)} > Settings</p> <br />
			
			<p> Cart</p> <br/>
			<p onClick = {() => logout()}> Logout</p> <br/>
		</div>
	)

}


//this is for the profile drop down list