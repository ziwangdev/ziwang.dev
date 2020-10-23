import React, {Component} from 'react';
import './Intro.css';

export default class Intro extends Component{
    render(){
        return(
            <div className='self-intro'>
                <h1>Hi, I am <b>Zi</b>,</h1>
                <h1>a <b>full-stack web developer</b></h1>
                <h1>with a background in <b>design</b>.</h1>
                <h1><i>I create immersive, meaningful</i></h1>
                <h1><i>and innovative web experiences</i></h1>
                <h1><i>to solve real-world problems.</i></h1>
            </div>
        )
    }
}