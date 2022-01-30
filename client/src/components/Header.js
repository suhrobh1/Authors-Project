import React, {useState} from 'react';
import { Link } from '@reach/router';

const Header =(props) =>{

    const {link, linkText, titleText} = props;

    return(
        <header style={{ borderBottom: "2px solid blue", margin: "5px" }}>
            <h2 style={{ display:"flex" }}>{titleText}</h2>
            <Link to={link}>{linkText}</Link>
        </header>
    )
}
export default Header;