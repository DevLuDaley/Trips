import React, { Fragment, Component } from 'react'
import axios from 'axios'

class DeleteTrip extends Component {
    constructor(props){
    super(props)

    // ! Add & bind =>>> methods.bind(this) here
        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

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
        this.fsafsas(response);
    })
}

    fsafsas(response) {
        this.setState({
            name: response.name,
            description: response.description,
            dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
            dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0, 10) : null
        });
    }

    onCancel(e){
        const {history} = this.props;
        history.push('/trips');
    }
    
    onConfirmation(e){
        const {id} = this.match.params;
        const {history} = this.props;
        history.push('/trips');

        axios.delete("api/trips/DeleteTrip"+id).then(result => {

            history.push('/trips');
        })
    }
    render() { 
        return ( 
            <Fragment>
            <div style={{ marginTop: 10 }}>
        <h2>Delete trip confirmation</h2>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title"> this.state.name </h4>
            <p class="card-text"> this.state.description </p>
            <button onClick={this.onCancel} class="btn btn-default">
              Cancel
            </button>
            <button onCLick={this.onConfirmation} class="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
            </Fragment>
         );
    }
}
 
export default DeleteTrip;