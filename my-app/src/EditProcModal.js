import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditProcModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'procesori',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
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
            Perditëso Procesorin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="Id" required
                        placeholder="Id"
                        disabled
                        defaultValue={this.props.procid} 
                        />
                    </Form.Group>

                    <Form.Group controlId="LlojiFirmes">
                        <Form.Label>Emri Firmes</Form.Label>
                        <Form.Control type="text" name="LlojiFirmes" required 
                        defaultValue={this.props.procname}
                        placeholder="LlojiFirmes"/>
                    </Form.Group>

                    <Form.Group controlId="Gjenerata">
                        <Form.Label>Gjenerata</Form.Label>
                        <Form.Control type="text" name="Gjenerata" required 
                        defaultValue={this.props.procgjen}
                        placeholder="Gjenerata"/>
                    </Form.Group>

                    <Form.Group controlId="Specifika">
                        <Form.Label>Specifika</Form.Label>
                        <Form.Control type="text" name="Specifika" required 
                        defaultValue={this.props.procspec}
                        placeholder="Specifika"/>
                    </Form.Group>

                    <Form.Group controlId="Qmimi">
                        <Form.Label>Qmimi</Form.Label>
                        <Form.Control type="number" name="Qmimi" required 
                        defaultValue={this.props.procqmim}
                        placeholder="Qmimi"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Perditëso Procesorin
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