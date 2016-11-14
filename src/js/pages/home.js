import { homeGraphic } from './utilities.js'

export default class Home extends React.Component {

  render() {
    return <div className={'home-page page ' + this.props.className}>
    	<img className="person" 
    			 src={homeGraphic}/>
      <div className="title">
        <h6>Hello! My name is</h6>
        <h1>JOHN DOE</h1>
      </div>
      <div className="objective">
        <h2>OBJECTIVE</h2>
        <h6>I’d like to excel in a web <br/>development career.</h6>
      </div>
    </div>
  }
}