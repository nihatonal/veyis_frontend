import React from 'react';
import NavLinks from './NavLinks';


import './MainNavigation.css';
function MainNavigation(props) {

    return (
        <div className={`bottom_header_container ${props.className}`} style={props.style}>
            <div className={'navbar_items'}>
                <NavLinks classNavItem={props.classNavItem} />

            </div>
        </div >
    );
}

export default MainNavigation;