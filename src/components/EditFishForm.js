import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish= {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index,updatedFish);
  }

  render(){
    return (
    <div className="fish-edit">
      <input name="name" 
        onChange={this.handleChange} 
        value={this.props.fish.name}
        type="text"/>
      <input name="price" 
        onChange={this.handleChange} 
        value={this.props.fish.price}
        type="text"/>
      <select 
        type="status" 
        onChange={this.handleChange} 
        value={this.props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold out!</option>
      </select>
      <textarea
        type="des" 
        onChange={this.handleChange} 
        value={this.props.fish.desc} />
      <input name="image" 
        onChange={this.handleChange} 
        value={this.props.fish.image}
        type="text"/>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
      </div>
    )
  }
}

export default EditFishForm;