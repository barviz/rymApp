import React from 'react'

export const Navbar = ({ brand }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{ brand }</a>
                </div>
            </nav>
        </div>
    )
}
