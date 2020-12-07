 import React, { Component } from "react";
import axios from "axios";



class Productdetails extends Component {
  constructor(props) {
      console.log(props.match.params.id);
    super(props);
      this.state = {
        //  item: this.props.state
    };
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <div className="container-1">
         
        </div>
      </div>
    );
  }
}

export default Productdetails;

