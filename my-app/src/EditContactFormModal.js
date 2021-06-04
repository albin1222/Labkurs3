import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditContactFormModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'ContactForm',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                Name:event.target.Name.value,
                Email:event.target.Email.value,
                message:event.target.message.value,
                
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
        Perditëso 
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="Id" required
                        disabled
                        defaultValue={this.props.CFId} 
                        placeholder="Id"/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.CFName}
                        placeholder="Name"/>
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required 
                        defaultValue={this.props.CFEmail}
                        placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>message</Form.Label>
                        <Form.Control type="text" name="message" required 
                        defaultValue={this.props.CFmessage}
                        placeholder="message"/>
                    </Form.Group>


                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Perditëso Produktin
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