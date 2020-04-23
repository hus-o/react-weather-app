import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue: "",
            redirect :false
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleChange(event) {
        event.preventDefault()
        this.setState({searchValue: event.target.value});
      }
      handleSubmit(event) {
          event.preventDefault()
          console.log(this.state.searchValue)
          this.props.history.push({
            pathname: '/results',
            state: { searchValue: this.state.searchValue}
          })
        };

    render() { 
        return ( 
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search for a city" value={this.state.searchValue} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
            </React.Fragment>
         );
    }
}
 
export default withRouter(Search);