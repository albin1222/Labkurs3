import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditPreferencatETelModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'PreferencatETel',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                Name:event.target.Name.value,
                Preferences:event.target.Preferences.value,
                Quantity:event.target.Quantity.value,
                Storage:event.target.Storage.value,
                Extra:event.target.Extra.value,
                
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
                        defaultValue={this.props.PTelId} 
                        placeholder="Id"/>
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.PTelName}
                        placeholder="Name"/>
                    </Form.Group>
                    <Form.Group controlId="Preferences">
                        <Form.Label>Preferences</Form.Label>
                        <Form.Control type="text" name="Preferences" required 
                        defaultValue={this.props.PTelPreferences}
                        placeholder="Preferences"/>
                    </Form.Group>
                    <Form.Group controlId="Quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" name="Quantity" required 
                        defaultValue={this.props.PTelQuantity}
                        placeholder="Quantity"/>
                    </Form.Group>
                    <Form.Group controlId="Storage">
                        <Form.Label>Storage</Form.Label>
                        <Form.Control type="text" name="Storage" required 
                        defaultValue={this.props.PTelStorage}
                        placeholder="Storage"/>
                    </Form.Group>
                    <Form.Group controlId="Extra">
                        <Form.Label>Extra</Form.Label>
                        <Form.Control type="text" name="Extra" required 
                        defaultValue={this.props.PTelExtra}
                        placeholder="Extra"/>
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