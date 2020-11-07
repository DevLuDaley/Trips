import React, { Fragment, Component } from 'react';

// export 
    class Trips extends Component {
    constructor(props){
        super(props)
        this.state = {
            trips:[],
            loading: true
          }
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
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>Action1`</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>Action2</td>
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
            </div>
            </Fragment>
          );
    }
}
 
// export default 
export default Trips;