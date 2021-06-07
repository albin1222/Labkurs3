import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddPreferencatETelModal extends Component{
    constructor(props){
        super(props);
        this.state={PTels:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "anonymous.png";
    // imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'PreferencatETel')
        .then(response=>response.json())
        .then(data=>{
            this.setState({PTels:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'PreferencatETel',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                Name:event.target.Name.value,
                Preferences:event.target.Preferences.value,
                Quantity:event.target.Quantity.value,
                Storage:event.target.Storage.value,
                Extra:event.target.Extra.value
               

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
    // handleFileSelected(event){
    //     event.preventDefault();
    //     this.photofilename=event.target.files[0].name;
    //     const formData = new FormData();
    //     formData.append(
    //         "myFile",
    //         event.target.files[0],
    //         event.target.files[0].name
    //     );

    //     fetch(process.env.REACT_APP_API+'Employee/SaveFile',{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
    //     },
    //     (error)=>{
    //         alert('Failed');
    //     })
        
    // }

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
            Add PreferencatETel
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="Preferences">
                        <Form.Label>Preferences</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Preferences"
                        required
                        placeholder="Preferences"/>
                    </Form.Group>

                    <Form.Group controlId="Quantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Quantity"
                        required
                        placeholder="Quantity"/>
                    </Form.Group>

                    <Form.Group controlId="Storage">
                        <Form.Label>Storage</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Storage"
                        required
                        placeholder="Storage"/>
                    </Form.Group>

                    <Form.Group controlId="Extra">
                        <Form.Label>Extra</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Extra"
                        required
                        placeholder="Extra"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add 
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
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