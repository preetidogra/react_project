import React from 'eslint-plugin-react'
import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/Logotype.jpg'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'



export const DesktopNavigation = () => {
	const [authenticatedUser,] = useContext(UserContext)
	const history = useHistory()

	/*const renderLogin =() =>{
		if (authenticatedUser){
			return <div className = 'signInButton'><Profile /> </div>
		} else {
			return <span className='signInButton' onClick = {() => history.push(RoutingPath.SignInView)}> Sign_In </span>
  
		}
	}*/

	//CONDITION ? true: false

	const renderLogin = () => {

		return authenticatedUser
			? <div className='signInButton'><Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.SignInView)}> Sign_In </span>
	}

	return (

		<div className='desktopnavigationWrapper'>

			<img className='navigationLogotype'
				src={Logotype}
				alt={'..error'}
				onClick={() => history.push(RoutingPath.homeview)} />


			<span className='shopButton' onClick={() => history.push(RoutingPath.ShopView)}> SHOP</span>
			<span className='accessoriesButton' onClick={() => history.push(RoutingPath.AccessoriesView)}> ACCESSORIES</span>
			<span className='brandButton' onClick={() => history.push(RoutingPath.brandsView)}>BRANDS</span>
			<span className='newsButton' onClick={() => history.push(RoutingPath.NewsView)}>NEWS</span>


			{renderLogin()}
		</div>

	)
}