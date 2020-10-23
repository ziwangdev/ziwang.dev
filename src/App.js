import React, {Component} from 'react';
import './App.css';
import Intro from './Intro'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import {Button, Alert, Breadcrumb} from 'react-bootstrap'
//import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl'

export default class App extends Component{

    render(){
        return(
               <Intro/>
        )
    }
}