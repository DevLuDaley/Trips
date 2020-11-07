import React, { Fragment, Component } from 'react'
class Create extends Component {
    constructor(props){
        super(props)
        this.onChangeName = this.onChange.bind(this);
        this.state = {
                   name: '',
                   description: '',
                   dateStarted: null,
                   dateCompleted: null
          }
          
        }
              onChange = (e) => {
                //   e.target
                  console.log('Create -> onChange -> e.target', e.target);
                  this.setState({
                    // [e.target.name]: e.target.value,
                    // description: e.target.value,
                    // dateStarted: e.target.value,
                    // dateCompleted: e.target.value
                        }
                  )
    }
    onSubmit(e){
        e.preventDefault();
    }
    render() { 
        return ( 
        <Fragment>  
            <div className="trip-form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.name}
                         onchange={this.onChange}

                         />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea 
			  type="text" 
                          className="form-control"
                          value={this.state.description}
                          onchange={this.onChange}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input 
                                  type="date" 
                                  className="form-control" 
                                  value={this.state.dateStarted}
                                  onchange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                          <div className="form-group">
                            <label>Date of completion:  </label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={this.state.dateCompleted}
                                onchange={this.onChange}
                            />
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </Fragment> );
    }
}
 
export default Create;