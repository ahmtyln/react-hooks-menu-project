import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({filterItems,categories}) => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            {
                                categories.map((category,index)=> {

                                    return  <Link className="nav-link mx-4 btn active" key={index} onClick={() =>{filterItems(category)}} type="button" aria-current="page" to={category}>{category}</Link>
                                })
                            }
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
