import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditProdModal extends Component{
    constructor(props){
        super(props);
        this.state={prods:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'produkti',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ProduktID:event.target.ProduktID.value,
                EmriProduktit:event.target.EmriProduktit.value,
                NumriIProdukteve:event.target.NumriIProdukteve.value,
                EmriKompanis:event.target.EmriKompanis.value,
                LlojiIProduktit:event.target.LlojiIProduktit.value,
                DataENdertimit:event.target.DataENdertimit.value,
                PhotoProduktit:this.photofilename

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


    handleFileSelected(event){
        event.preventDefault();
        this.photofilename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'produkti/'+'SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
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
            Edit Produkt
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="ProduktID">
                        <Form.Label>ProduktID</Form.Label>
                        <Form.Control type="text" name="ProduktID" required 
                        placeholder="ProduktID"
                        disabled
                        defaultValue={this.props.prodid}/>
                    </Form.Group>

                    <Form.Group controlId="EmriProduktit">
                        <Form.Label>EmriProduktit</Form.Label>
                        <Form.Control type="text" name="EmriProduktit" required 
                        defaultValue={this.props.prodname}
                        placeholder="EmriProduktit"/>
                    </Form.Group>

                    <Form.Group controlId="NumriIProdukteve">
                        <Form.Label>NumriIProdukteve</Form.Label>
                        <Form.Control type="number" name="NumriIProdukteve" required 
                        defaultValue={this.props.prodnr}
                        placeholder="NumriIProdukteve"/>
                    </Form.Group>

                    <Form.Group controlId="EmriKompanis">
                        <Form.Label>EmriKompanis</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.komp}>
                        {this.state.prods.map(prod=>
                            <option key={prod.ProduktID}>{prod.EmriKompanis}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="LlojiIProduktit">
                        <Form.Label>LlojiIProduktit</Form.Label>
                        <Form.Control type="text" name="LlojiIProduktit" required 
                        defaultValue={this.props.prodll}
                        placeholder="LlojiIProduktit"/>
                    </Form.Group>

                    <Form.Group controlId="DataENdertimit">
                        <Form.Label>DataENdertimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataENdertimit"
                        required
                        placeholder="DataENdertimit"
                        defaultValue={this.props.den}
                        />


                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Perditëso Produktin
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            <Col sm={6}>
                <Image width="200px" height="200px" 
                src={process.env.REACT_APP_PHOTOPATH+this.props.photofilename}/>
                <input onChange={this.handleFileSelected} type="File"/>
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