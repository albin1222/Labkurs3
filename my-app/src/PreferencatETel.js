import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPreferencatETelModal} from './AddPreferencatETelModal';
import {EditPreferencatETelModal} from './EditPreferencatETelModal';

export class PreferencatETel extends Component{

    constructor(props){
        super(props);
        this.state={PTels:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'PreferencatETel')
        .then(response=>response.json())
        .then(data=>{
            this.setState({PTels:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    // deleteDep(depid){
    //     if(window.confirm('Are you sure?')){
    //         fetch(process.env.REACT_APP_API+'PerferencatETel/'+depid,{
    //             method:'DELETE',
    //             header:{'Accept':'application/json',
    //         'Content-Type':'application/json'}
    //         })
    //     }
    // }
    render(){
        const {PTels,PTelId, PTelName,PTelPreferences,PTelQuantity,PTelStorage,PTelExtra}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Preferences</th>
                        <th>Quantity</th>
                        <th>Storage</th>
                        <th>Extra</th>
                        

                        </tr>
                    </thead>
                    <tbody>
                        {PTels.map(PTel=>
                            <tr key={PTel.Id}>
                                <td>{PTel.Id}</td>
                                <td>{PTel.Name}</td>
                                <td>{PTel.Preferences}</td>
                                <td>{PTel.Quantity}</td>
                                <td>{PTel.Storage}</td>
                                <td>{PTel.Extra}</td>
                              
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        PTelId:PTel.Id,PTelName:PTel.Name,PTelPreferences:PTel.Preferences,PTelQuantity:PTel.Quantity,PTelStorage:PTel.Storage,PTelExtra:PTel.Extra})}>
            Edit
        </Button>

        {/* <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(dep.DepartmentId)}>
            Delete
        </Button> */}

        <EditPreferencatETelModal show={this.state.editModalShow}
        onHide={editModalClose}
        PTelId={PTelId}
        PTelName={PTelName}
        PTelPreferences={PTelPreferences}
        PTelQuantity={PTelQuantity}
        PTelStorage={PTelStorage}
        PTelExtra={PTelExtra
        }/>
</ButtonToolbar> 

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add PreferencatETel</Button>

                    <AddPreferencatETelModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}