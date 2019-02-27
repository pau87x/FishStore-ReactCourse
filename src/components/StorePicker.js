import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  inputStore = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const nameStore = this.inputStore.current.value;
    this.props.history.push(`/store/${nameStore}`);
  }

  render() {
    return(
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store name</h2>
          <input type="text" ref={this.inputStore} required placeholder="Name" defaultValue={ getFunName() }/>
          <button type="submit">Visit Store -></button>
        </form>
    )
  }
}

export default StorePicker;