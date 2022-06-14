import React from 'react';
import DescriptionWithLink from './descriptioWithLink';


async function getSatellites(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let date = await response.json()
  return date;
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    satellites:[]
   }

  componentDidMount() {
    getSatellites(this.props.id).then(data =>{
      this.setState(state =>({
        satellites: data['satellites']
      }))
    })
  }

  render() { 
    return ( 
    <div>
      <h3>{this.props.name}</h3>
      <DescriptionWithLink descripion={this.props.descripion} link={this.props.link}/>
      <br/>
      <img src={this.props.imagem}></img>
      <h4>Satellites</h4>
      <ul>
        {this.state.satellites.map((satellite)=>
        <li>{satellite.name}</li>
        )}
      </ul>
      <hr/>""
    </div> 
);
}
}
 
export default Planet;