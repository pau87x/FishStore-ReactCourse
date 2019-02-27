import React from 'react';

class AddFishForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  desRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      statue: this.statusRef.current.value,
      des: this.desRef.current.value,
      image: this.imageRef.current.value
    }
    // console.log(fish);
    this.props.addFish(fish);
  }

  render(){
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
        <select type="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea type="des" ref={this.desRef} placeholder="Des"/>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
