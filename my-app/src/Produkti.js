import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddProdModal} from './AddProdModal';
import {EditProdModal} from './EditProdModal';

export class Produkti extends Component{

    constructor(props){
        super(props);
        this.state={prods:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Produkti')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(prodid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Produkti/'+prodid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {prods,prodnr, prodid,prodname,prodll,komp,photofilename,den}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ProduktID</th>
                        <th>EmriProduktit</th>
                        <th>NumriIProdukteve</th>
                        <th>EmriKompanis</th>
                        <th>LlojiIProduktit</th>
                        <th>PhotoProduktit</th>
                        <th>DataENdertimit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prods.map(prod=>
                            <tr key={prod.ProduktID}>
                                 <td>{prod.ProduktID}</td>
                                <td>{prod.EmriProduktit}</td>
                                <td>{prod.NumriIProdukteve}</td>
                                <td>{prod.EmriKompanis}</td>
                                <td>{prod.LlojiIProduktit}</td>
                                <td>{prod.PhotoProduktit}</td>
                                <td>{prod.DataENdertimit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        prodid:prod.ProduktID,prodname:prod.EmriProduktit,prodnr:prod.NumriIProdukteve,
        komp:prod.EmriKompanis,prodll:prod.LlojiIProduktit,photofilename:prod.PhotoProduktit,den:prod.DataENdertimit})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(prod.ProduktID)}>
            Delete
        </Button>

        <EditProdModal show={this.state.editModalShow}
        onHide={editModalClose}
        prodid={prodid}
        prodname={prodname}
        prodnr={prodnr}
        komp={komp}
        prodll={prodll}
        photofilename={photofilename}
        den={den}
        />
        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Produkt</Button>

                    <AddProdModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
} 