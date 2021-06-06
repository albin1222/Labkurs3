import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddProcModal} from './AddProcModal';
import {EditProcModal} from './EditProcModal';

export class Procesori extends Component{

    constructor(props){
        super(props);
        this.state={proces:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'procesori')
        .then(response=>response.json())
        .then(data=>{
            this.setState({proces:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteProc(id){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'procesori/'+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {proces, id,procname,procgjen,procspec,procqmim}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ProcesorID</th>
                        <th>LlojiFirmes</th>
                        <th>Gjenerata</th>
                        <th>Specifika</th>
                        <th>Qmimi</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proces.map(proc=>
                            <tr key={proc.Id}>
                                 <td>{proc.Id}</td>
                                <td>{proc.LlojiFirmes}</td>
                                <td>{proc.Gjenerata}</td>
                                <td>{proc.Specifika}</td>
                                <td>{proc.Qmimi}€</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        id:proc.Id,procname:proc.LlojiFirmes,procgjen:proc.Gjenerata,
        procspec:proc.Specifika,procqmim:proc.Qmimi})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteProc(proc.Id)}>
            Delete
        </Button>

        <EditProcModal show={this.state.editModalShow}
        onHide={editModalClose}
        id={id}
        procname={procname}
        procgjen={procgjen}
        procspec={procspec}
        procqmim={procqmim}
        />
        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Procesor</Button>

                    <AddProcModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
} 