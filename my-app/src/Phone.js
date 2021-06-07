import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPhoneModal} from './AddPhoneModal';
import {EditPhoneModal} from './EditPhoneModal';

export class Phone extends Component{

    constructor(props){
        super(props);
        this.state={Phones:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'phone')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Phones:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deletePh(Phid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'phone/'+Phid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {Phones, Phid,Phname ,Phcompany,Phpreferences,Phother}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                        <th>Emri i telefonit</th>
                        <th>Kompania prodhuese</th>
                        <th>Preferencat</th>
                        <th>Te tjera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Phones.map(Ph=>
                            <tr key={Ph.ID}>
                                <td>{Ph.ID}</td>
                                <td>{Ph.Name}</td>
                                <td>{Ph.Company}</td>
                                <td>{Ph.Preferences}</td>
                                <td>{Ph.Other}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        Phid:Ph.ID,Phname:Ph.Name, Phcompany:Ph.Company, Phpreferences:Ph.Preferences,Phother:Ph.Other })}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deletePh(Ph.ID)}>
            Delete
        </Button>

        <EditPhoneModal show={this.state.editModalShow}
        onHide={editModalClose}
        Phid={Phid}
        Phname={Phname}
        Phcompany={Phcompany}
        Phpreferences={Phpreferences}
        Phother={Phother}
        />
        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto nje telefone te ri</Button>

                    <AddPhoneModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
} 