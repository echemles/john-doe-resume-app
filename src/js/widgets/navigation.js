export default class Navigation extends React.Component {

  render() {

  	const items = ['home', 'skills', 'experience', 'education'],
  		home = this.props.home;

    return <div className={'navigation ' + this.props.className}>
	    {	
	    	items.map((item, i)=>{
	    		return <a key={i} 
	    			onClick={this.props.togglePage.bind(home, item)}
	    			className={item}>
	    			{item}
	    		</a>
	    	})
	    }
    </div>
  }
}