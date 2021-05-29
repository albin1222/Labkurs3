import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditKompModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'kompaniaprodhuese',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                KompaniaID:event.target.KompaniaID.value,
                EmriKompanis:event.target.EmriKompanis.value,
                NumriBiznesit:event.target.NumriBiznesit.value
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
            Edit Kompani
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="KompaniaID">
                        <Form.Label>KompaniaID</Form.Label>
                        <Form.Control type="text" name="KompaniaID" required
                        disabled
                        defaultValue={this.props.kompid} 
                        placeholder="EmriKompanis"/>
                    </Form.Group>

                    <Form.Group controlId="EmriKompanis">
                        <Form.Label>EmriKompanis</Form.Label>
                        <Form.Control type="text" name="EmriKompanis" required 
                        defaultValue={this.props.kompname}
                        placeholder="EmriKompanis"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Kompanin
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