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

    componentDidMount(){
    const {id} = this.props.match.params;
    axios.get('api/Trips/singleTrip/'+id).then(trip => {
        const response = trip.data
        this.setState({
            name: response.name,
            description: response.description,
            dateStarted: new Date(response.dateStarted).toISOString().slice(0,10),
            dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0,10) : null
        })
    })
}

    render() { 
        return ( 
            <Fragment>

            </Fragment>
         );
    }
}
 
export default DeleteTrip;