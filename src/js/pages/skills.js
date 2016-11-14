import { skillsGraphic, devSkills, pmSkills } from './utilities';

export default class Skills extends React.Component {
  render() {
    return <div className={'skills-page page ' + this.props.className}>
	    <img src={skillsGraphic} className='list-laptop' />
	    <div className='skills-list'>
	    	<h2>DEVELOPMENT SKILLS</h2>
	    		{
	    			devSkills.map((skill, i)=>{
	    				return <span className='skill' key={i}>{skill}</span>
	    			})
	    		}
	    	<h2>PROJECT MANAGEMENT SKILLS</h2>
	    		{
	    			pmSkills.map((skill, i)=>{
	    				return <span className='skill' key={i}>{skill}</span>
	    			})
	    		}
	    </div>
    </div>
  }
}