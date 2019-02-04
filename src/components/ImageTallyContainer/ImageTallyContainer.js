import React, { Component } from 'react';
import ImageTallyItem from '../ImageTallyItem/ImageTallyItem'

class ImageTallyContainer extends Component {
  constructor(props) {
    super();
    this.state = {...props, tally: [] }
    }

  iconClicker = (e) => {
    e.target.className === 'icon unselected' ?
      e.target.className = 'icon' :
      e.target.className = 'icon unselected';
  }

  updateTallyState = (newState) => {
    this.setState({tally: newState});
  }

  populateTally = () => {
    let tallyToReturn = []
    for (var i = 0; i < this.state.amount; i++) {
      tallyToReturn.push( <ImageTallyItem
        key={"icon" + this.state.type + i}
        data-test='tally-icon'
        styleIcon='icon unselected'
        id={"icon" + this.state.type + i}
        iconClicker={this.iconClicker.bind()}
        icon={this.state.icon}
        />);
    }
    this.updateTallyState(tallyToReturn);
  }

  componentDidMount() {
    this.populateTally();
  }

  render() {
    return (
      <ul data-test='component-icon-tally' >
        {this.state.tally.map(item => {
          return item
        })}
      </ul>
    );
  }
}


export default ImageTallyContainer
