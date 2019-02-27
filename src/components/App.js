import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes});
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key]+1 || 1;
    this.setState({ order });
  }

  componentDidMount(){
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.idStore)
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)})
    }
    this.ref = base.syncState(`${params.idStore}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate(){
    console.log(this.state.order)
    localStorage.setItem(this.props.match.params.idStore, JSON.stringify(this.state.order))
    console.log("updated")
  }

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    const fishes = {...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }

  removeFromOrder = (key) => {
    const order = {...this.state.order };
    delete order[key];
    this.setState({ order });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Pau store"/>
          <ul className="fishes">
            { Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}/>
            ))}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
          removeFromOrder={this.removeFromOrder} />
        <Inventory 
          loadSampleFishes={this.loadSampleFishes} 
          fishes={this.state.fishes} 
          addFish={this.addFish} 
          updateFish={this.updateFish} 
          deleteFish={this.deleteFish} />
      </div>
    )
  }
}

export default App;