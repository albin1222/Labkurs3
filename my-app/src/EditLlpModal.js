import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditLlpModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'llojeteprodukteve',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                IdeProduktit:event.target.IdeProduktit.value,
                LlojiIProduktit:event.target.LlojiIProduktit.value,
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
        Perditëso Produktin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="IdeProduktit">
                        <Form.Label>IdeProduktit</Form.Label>
                        <Form.Control type="text" name="IdeProduktit" required
                        disabled
                        defaultValue={this.props.llpid} 
                        placeholder="LlojiIProduktit"/>
                    </Form.Group>

                    <Form.Group controlId="LlojiIProduktit">
                        <Form.Label>LlojiIProduktit</Form.Label>
                        <Form.Control type="text" name="LlojiIProduktit" required 
                        defaultValue={this.props.llpp}
                        placeholder="LlojiIProduktit"/>
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