import React, { Fragment, Component } from 'react'
import axios from 'axios'
class DeleteTrip extends Component {
    constructor(props){
    super(props)
    // ! Add & bind =>>> methods.bind(this) here
    this.state = {
                   name: '',
                   description: '',
                   dateStarted: null,
                   dateCompleted: null
          }
    
          
    }
    render() { 
        return ( 
            <Fragment>

            </Fragment>
         );
    }
}
 
export default DeleteTrip;