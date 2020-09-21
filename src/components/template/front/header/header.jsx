import React from 'react'

const HeaderTemplate = () =>{

    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    <img src="images/logo.svg" height="28" alt="CoolBrand"/>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/home" className="nav-item nav-link active">Home</a>
                        <a href="/home" className="nav-item nav-link">Profile</a>
                        <a href="/home" className="nav-item nav-link">Messages</a>
                        <a href="/homr" className="nav-item nav-link disabled" tabIndex="-1">Reports</a>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default HeaderTemplate
