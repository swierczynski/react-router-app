import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    {id:1, name:'Home', path:'/', exact:true},
    {id:2, name:'Products', path:'/products'},
    {id:3, name:'Contact', path:'/contact'},
    {id:4, name:'Admin Dashboard', path:'/admin'},
]


const Navigation = () => {
    

    const menu = list.map( nav => {
        return (
        <li key={nav.id}> <NavLink to={nav.path} exact={nav.exact ? true : false}>{nav.name}</NavLink></li>
        )
    })

    return ( 
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;