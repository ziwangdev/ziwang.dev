import React, {Component} from 'react';
import './SideNav.css';

class SideNav extends Component{

    render(){
        return(
            <div className={"side-bar"}>
                <ul>
                    <li className={"top-page"}>(TOP)</li>
                    <li className={"current-page"}>WELCOME</li>
                    <li className={"bottom-page"}>PROJECTS</li>
                </ul>

            </div>

        )
    }
}

export default SideNav;