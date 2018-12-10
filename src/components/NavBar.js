import  React, { Component } from "react";
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    

    state = {}

    
    handleItemClick = (e, { name }) =>
        this.setState({ activeItem: name })

        
    render() {
        const { activeItem } = this.state
        return (
            <Menu size='large'>
                <h3 class="header item">Dressage Tests</h3>
                <Menu.Item
                    as={Link} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/tests'
                    name='Tests'
                    active={activeItem === 'tests'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>
                <Menu.Item
                    as={Link} to='about'
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>
            </Menu>
        )
    }
}
export default NavBar