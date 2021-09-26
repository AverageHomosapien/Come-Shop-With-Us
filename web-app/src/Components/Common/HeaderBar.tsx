import {FC} from 'react';

interface HeaderBarProps {
    firstName: string;
}

const HeaderBar : FC<HeaderBarProps> = (props) : JSX.Element => {
    return(
        <div id="topnav">
            <a href="#home">Home</a>
            <a href="#news">{props.firstName}&#39;s Page</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default HeaderBar;