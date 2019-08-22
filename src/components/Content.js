import React, {Component, Fragment} from 'react';
import {Form} from 'react-bootstrap';
import { connect } from 'react-redux';


class Content extends Component {
handleSubmit = (e) => {
    e.prevetDefault();
    const name = this.getName.value;
    const description = this.getDescription.value;
    const data = {
        id: name,
        description
    }
    
    this.props.dispatch({
        type:'ADD_ELEMENT',
        data});
        this.getName.value ='';
        this.getDescription.value = '';
    };



    render() {
      return(
        <Fragment> 
            <div> Estás agregando un nuevo elemento</div>
            <Form className="form" onSubmit={this.handleSubmit}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" ref={(input)=>this.getName = input}/>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows="3" ref={(input)=>this.getDescription = input} />
                <button className="btnCreate">Crear</button>
            </Form>
       
       
         <div> 
             <button className="btnCancel">Cancelar</button>
             
         </div>
         </Fragment>

    );
    
    }
}
    
    export default connect()(Content);