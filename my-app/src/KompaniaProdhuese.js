import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddKompModal} from './AddKompModal';
import {EditKompModal} from './EditKompModal';

export class KompaniaProdhuese extends Component{

    constructor(props){
        super(props);
        this.state={komps:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'kompaniaprodhuese')
        .then(response=>response.json())
        .then(data=>{
            this.setState({komps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(kompid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'kompaniaprodhuese/'+kompid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {komps, kompid,kompname,kompnrB}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>KompaniaID</th>
                        <th>EmriKompanis</th>
                        <th>NumriBiznesit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {komps.map(komp=>
                            <tr key={komp.KompaniaID}>
                                <td>{komp.KompaniaID}</td>
                                <td>{komp.EmriKompanis}</td>
                                <td>{komp.NumriBiznesit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        kompid:komp.KompaniaID,kompname:komp.EmriKompanis,kompnrB:komp.NumriBiznesit})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(komp.KompaniaID)}>
            Delete
        </Button>

        <EditKompModal show={this.state.editModalShow}
        onHide={editModalClose}
        kompid={kompid}
        kompname={kompname}
        kompnrB={kompnrB}/>
        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto Kompani</Button>

                    <AddKompModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
} 