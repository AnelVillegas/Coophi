import React, {Component} from 'react';
import {connect} from 'react-redux';
import Elements from './Elements';


class SideSection extends Component {
    render() {
         
      return(
        <div className= "side" >
          <div className="new">Elementos</div>
      {this.props.elements.map((element) => <Elements key={element.id} element={element}/>)}

        <button id= "add" className= "btnAdd">Agregar </button>
       
      </div>
    );
    
    }
}

    const mapStateToProps = (state) => {
        return {
            elements: state
        }
    }
    
    export default connect(mapStateToProps)(SideSection);