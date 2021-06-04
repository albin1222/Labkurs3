import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddPhoneModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'phone',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            
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
            Shto nje telefone te ri
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="Company">
                        <Form.Label>Kompania prodhuese</Form.Label>
                        <Form.Control type="text" name="Company" required 
                        placeholder="Company"/>
                    </Form.Group>
                    <Form.Group controlId="Preferences">
                        <Form.Label>Preferencat</Form.Label>
                        <Form.Control type="text" name="Preferences" required 
                        placeholder="Preferences"/>
                    </Form.Group>
                    <Form.Group controlId="Other">
                        <Form.Label>Te tjera</Form.Label>
                        <Form.Control type="text" name="Other" required 
                        placeholder="Other"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto telefonin e ri!
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

} 