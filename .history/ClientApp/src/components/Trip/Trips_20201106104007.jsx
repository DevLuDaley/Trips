import React, { Fragment, Component } from 'react';
import axios from 'axios'
// export 
    class Trips extends Component {
    constructor(props){
        super(props)
        this.state = {
            trips:[],
            loading: true
          }
    }

    componentDidMount(){
        this.populateTripsData()
    }
    populateTripsData(){
        axios.get('api/Trips/GetTrips').then(result => {
            const response = result.data;
            this.setState({trips: response, loading:false});
        }
        )
    }

    renderAllTripsTable(trips){
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {trips.map(trip => {
                    (<tr key={trip.id}>
                        <td>{trip.name}</td>
                        <td>{trips.description}</td>
                        <td>{trips.dateStarted}</td>
                        <td>{trips.dateCompleted}</td>
                        <td>Actions-Column</td>
                    </tr>)
                })}
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>Action1</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    render() {
        let content = this.state.loading ? (
            <p>
                <em> Loading...</em>
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )
        return (
            <Fragment>
            <div>
                <h1> All Trips</h1>
                <p> Here you can see all trips</p>
                {content}
            </div>
            </Fragment>
          );
    }
}
 
// export default 
export default Trips;