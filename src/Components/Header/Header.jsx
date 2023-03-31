import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <nav className="navbar border-bottom ">
                <div className="container-fluid ">
                    <a className="navbar-brand fs-1" href="#">
                    
                        Knowledge Cafe</a>

                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="Logo" width="60" height="60" className="d-inline-block align-text-top rounded-circle "></img>
                    

                    
                    
                </div>
            </nav>
            
        </div>
    );
};

export default Header;