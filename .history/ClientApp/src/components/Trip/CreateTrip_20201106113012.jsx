import React, { Fragment, Component } from 'react'
class Create extends Component {
    constructor(props){
        super(props)
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
            <h1> Create Page</h1>
        </Fragment> );
    }
}
 
export default Create;