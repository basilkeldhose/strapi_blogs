import React, { Component } from 'react'

const Navbar =()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">Sample Blog</a>
                <a className="navbar-brand" href="/addblog">Add New Blog</a>
            </nav>
        </div>
    )
}
export default Navbar