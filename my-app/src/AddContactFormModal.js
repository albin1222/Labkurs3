import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddContactFormModal extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "anonymous.png";
    // imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'contactform',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                Name:event.target.Name.value,
                Email:event.target.Email.value,
                message:event.target.message.value
               

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
            Add Contactform
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

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="text"
                        name="Email"
                        required
                        placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>message</Form.Label>
                        <Form.Control 
                        type="text"
                        name="message"
                        required
                        placeholder="message"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add contactform
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