import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <header>
                <a href="/">
                    <img src="/logo_gob_mexico.png" alt="Logo Gobierno Federal" className="logo-header"/>
                </a>
            </header>
        )
    }
}

export default Header;