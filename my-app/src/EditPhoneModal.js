import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditPhoneModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'phone',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID:event.target.ID.value,
                Name:event.target.Name.value,
                Company:event.target.Company.value,
                Preferences:event.target.Preferences.value,
                Other:event.target.Other.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Perditëso telefonin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="ID">
                        <Form.Label> Id</Form.Label>
                        <Form.Control type="text" name="ID" required
                        disabled
                        defaultValue={this.props.Phid} 
                        placeholder="ID"/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.Phname}
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="Company">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" name="Company" required 
                        defaultValue={this.props.Phcompany}
                        placeholder="Company"/>
                    </Form.Group>
                    <Form.Group controlId="Preferences">
                        <Form.Label>Preferencat</Form.Label>
                        <Form.Control type="text" name="Preferences" required 
                        defaultValue={this.props.Phpreferences}
                        placeholder="Preferences"/>
                    </Form.Group>
                    <Form.Group controlId="Other">
                        <Form.Label>Te tjera</Form.Label>
                        <Form.Control type="text" name="ComOtherpany" required 
                        defaultValue={this.props.Phother}
                        placeholder="Other"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Perditesoe
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Mbylle</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

} 