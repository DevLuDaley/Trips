import React, { Component } from 'react'
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
        <>
            <h1> Create Page</h1>
        </> );
    }
}
 
export default Create;