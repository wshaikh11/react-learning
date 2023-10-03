import React, { Component } from 'react';

class LifecycleA extends Component {

    constructor(props) {
      super(props)

      this.state = {
        name : "Wasim"
      }
    
      console.info("lifecycleA constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.info("lifecycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.info("lifecycleA componentDidMount");
    }
    
  render() {
    console.info("lifecycleA render");
    return (
      <div>
        LifecycleA
      </div>
    );
  }
}

export default LifecycleA;
