import React from 'react';
import '../styles/Header.css'
import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'
import header3 from '../images/header3.jpg'
import errorpage from '../images/errorpage.jpeg';

import {Route, Switch} from 'react-router-dom'

const Header = () => {
    return ( 
        <Switch>
            <Route path='/' exact render={()=> {
                return (
                    <img src={header1} alt='city' />
                )
            }} />
            <Route path='/contact' render={()=> {
                return (
                    <img src={header2} alt='city' />
                )
            }} />
            <Route path='/products' render={()=> {
                return (
                    <img src={header3} alt='city' />
                )
            }} />
            <Route path='/admin' render={()=> {
                return (
                    <img src={header1} alt='city' />
                )
            }} />
            <Route render={()=> {
                return (
                    <img src={errorpage} alt='error' />
                )
            }} />
        </Switch>
     );
}
 
export default Header;