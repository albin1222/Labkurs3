import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddLlpModal} from './AddLlpModal';
import {EditLlpModal} from './EditLlpModal';

export class LlojeteProdukteve extends Component{

    constructor(props){
        super(props);
        this.state={llps:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'llojeteprodukteve')
        .then(response=>response.json())
        .then(data=>{
            this.setState({llps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(llpid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'llojeteprodukteve/'+llpid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {llps, llpid,llpp}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>IdeProduktit</th>
                        <th>LlojiIProduktit</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {llps.map(llp=>
                            <tr key={llp.IdeProduktit}>
                                <td>{llp.IdeProduktit}</td>
                                <td>{llp.LlojiIProduktit}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        llpid:llp.IdeProduktit,llpp:llp.LlojiIProduktit})}>
            Edito
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(llp.IdeProduktit)}>
            Fshij
        </Button>

        <EditLlpModal show={this.state.editModalShow}
        onHide={editModalClose}
        llpid={llpid}
        llpp={llpp}
        />
        
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto një Produkt</Button>

                    <AddLlpModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
} 