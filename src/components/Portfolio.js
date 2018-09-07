import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="category-tabs">
          <div
            activeTab={this.state.activeTab}
            onChange={tabID => this.setState({ activeTab: tabID })}
          >
            <div>React App</div>
            <div>React App</div>
            <div>React App</div>
            <div>React App</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
