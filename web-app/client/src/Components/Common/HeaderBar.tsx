import {FC} from 'react';

interface HeaderBarProps {
    firstName: string;
}

const HeaderBar : FC<HeaderBarProps> = (props) : JSX.Element => {
    return(
        <ul id='navigation-bar'>
            <li><a href="default.html">Home</a></li>
            <li><a href="news.html">{props.firstName}&#39;s Page</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">Settings</a></li>
        </ul>
    );
}

export default HeaderBar;