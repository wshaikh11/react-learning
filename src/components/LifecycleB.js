import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }

    static getDerivedStateFromProps(){
        console.info("LifecycleB getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.info("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.info("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.info("LifecycleB componentDidUpdate");
    }


    handleClick () {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    
  render() {
    console.info("LifecycleB render");
    return (
      <div>
        {this.state.counter}
        <button onClick={this.handleClick}>Click</button>        
      </div>
    );
  }
}

export default LifecycleB;
