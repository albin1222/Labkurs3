import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddContactFormModal} from './AddContactFormModal';
import {EditContactFormModal} from './EditContactFormModal';

export class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state={CFS:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ContactForm')
        .then(response=>response.json())
        .then(data=>{
            this.setState({CFS:data});
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
    //         fetch(process.env.REACT_APP_API+'ContactForm/'+depid,{
    //             method:'DELETE',
    //             header:{'Accept':'application/json',
    //         'Content-Type':'application/json'}
    //         })
    //     }
    // }
    render(){
        const {CFS,CFId, CFName,CFEmail,CFmessage}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                        <th>Emri</th>
                        <th>Emaili</th>
                        <th>Mesazhi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CFS.map(CF=>
                            <tr key={CF.Id}>
                                <td>{CF.Id}</td>
                                <td>{CF.Name}</td>
                                <td>{CF.Email}</td>
                                <td>{CF.message}</td>
                              
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        CFId:CF.Id,CFName:CF.Name,CFEmail:CF.Email,CFmessage:CF.message})}>
            Edit
        </Button>

        {/* <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(dep.DepartmentId)}>
            Delete
        </Button> */}

        <EditContactFormModal show={this.state.editModalShow}
        onHide={editModalClose}
        CFId={CFId}
        CFName={CFName}
        CFEmail={CFEmail}
        CFmessage={CFmessage}/>
</ButtonToolbar> 

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add ContactForm</Button>

                    <AddContactFormModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}