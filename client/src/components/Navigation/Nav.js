import React, { Component } from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Redirect } from 'react-router'

class TopNav extends Component {

handleRedirect(){
    <Redirect to='/admin' />
}

    render() {
        return (
                <Navbar brand='Chumi Channel' className="black" right>
                    <NavItem >Sample</NavItem>
                    <NavItem >Follow Us</NavItem>
                    <NavItem
                    onClick ={this.handleRedirect}
                    ><Icon>settings</Icon></NavItem>
                </Navbar>
        )
    }
}


export default TopNav