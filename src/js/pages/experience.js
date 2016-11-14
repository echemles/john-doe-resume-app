import { expGraphic, eduGraphic, workExp, education } from './utilities';

export default class Experience extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentExp: 0
		}
	}

	switchExp(num){
		this.setState({currentExp: num});
	}

  render() {
  	
    return <div className={'experience-page page ' + this.props.className}>
    	<img src={expGraphic} className='experience-graphic'/>
    	<div className='experiences-container'>
    		<h2>EXPERIENCE</h2>
    		<div className='labels'>
    			<h6>TITLE</h6>
    			<h6>COMPANY</h6>
    			<h6>DATES</h6>
    		</div>
    		{
    			workExp.map((work, i)=>{
    				return <div key={i} className={'job ' + ( this.state.currentExp === i ? 'active' : '' ) }>
		    			<div>
		    				{work.title}<br/>{work.company}<br/>{work.dates}
		    			</div>
		    			<ul>
		    				{
		    					work.experience.map((exp, i2)=>{
		    						return <li key={i2}>{exp}</li>
		    					})
		    				}
		    			</ul>
		    		</div>
    			})
    		}
    		<div className='work-selector'>
    			{/* Toggles through different work history */}
    			<a onClick={this.switchExp.bind(this, 0)} className={this.state.currentExp === 0 ? 'active' : ''}>1</a>
    			<a onClick={this.switchExp.bind(this, 1)} className={this.state.currentExp === 1 ? 'active' : ''}>2</a>
    		</div>
    	</div>
    	<img src={eduGraphic} className='education-graphic'/>
    	<div className='education-container'>
    		<h2>EDUCATION</h2>
    		<div className='labels'>
    			<h6>DEGREE</h6>
    			<h6>SCHOOL</h6>
    			<h6>GPA</h6>
    			<h6>MAJOR</h6>
    			<h6>MINOR</h6>
    		</div>
    		<div className='info'>
    			{ education.map((data, i)=>{return <div key={i}>{data}</div>}) }
    		</div>
    	</div>
    </div>
  }
}