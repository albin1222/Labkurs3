import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddProcModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'procesori',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            
                LlojiFirmes:event.target.LlojiFirmes.value,
                Gjenerata:event.target.Gjenerata.value,
                Specifika:event.target.Specifika.value,
                Qmimi:event.target.Qmimi.value,
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
            Add Procesor
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="LlojiFirmes">
                        <Form.Label>Emri Firmes</Form.Label>
                        <Form.Control type="text" name="LlojiFirmes" required 
                        placeholder="LlojiFirmes"/>
                    </Form.Group>

                    <Form.Group controlId="Gjenerata">
                        <Form.Label>Gjenerata</Form.Label>
                        <Form.Control type="text" name="Gjenerata" required 
                        
                        placeholder="Gjenerata"/>
                    </Form.Group>

                    <Form.Group controlId="Specifika">
                        <Form.Label>Specifika</Form.Label>
                        <Form.Control type="text" name="Specifika" required 
                      
                        placeholder="Specifika"/>
                    </Form.Group>

                    <Form.Group controlId="Qmimi">
                        <Form.Label>Qmimi</Form.Label>
                        <Form.Control type="number" name="Qmimi" required 
                        
                        placeholder="Qmimi"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Procesor
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