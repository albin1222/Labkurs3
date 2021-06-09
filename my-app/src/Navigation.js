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
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/procesori">
                        Procesori
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Phone">
                        Telefonet
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/preferencatetel">
                        Preferencat e telefonit
                        
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/ContactForm">
                        Kontakti
                        </NavLink>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}