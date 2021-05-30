import React,{Component}from 'react';
import{NavLink} from 'react-router-dom';
import{Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        HOME
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/kompaniaprodhuese">
                        Kompania Prodhuese
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/llojeteprodukteve">
                        Llojet e Produkteve
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/produkti">
                        Produktet
                        </NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}