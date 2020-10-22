import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Button, Alert, Breadcrumb} from 'react-bootstrap'
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl'

const REACT_VERSION = React.version;
class App extends Component{

    render(){
        return(
            <div>
                {/* Uses a transparent header that draws on top of the layout's background */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                        <Header transparent title="Title" style={{color: 'white'}}>
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>
            </div>
        )
    }
}

export default App;
