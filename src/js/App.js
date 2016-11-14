import Home from './pages/home';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Contact from './widgets/contact';
import Navigation from './widgets/navigation';
import { logo } from './pages/utilities';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage: ''
		}
	}

	componentDidMount(){
		//prevents flash of unstyled content by revealing only when app loads
		let appContainer = document.getElementById("root");
		appContainer.style.opacity = 1;

		//provides additional time to allow assets to load
		setTimeout(()=>{ this.setState({currentPage: 'home'})}, 2000);
	}

	togglePage(page){
		this.setState({currentPage: page});
	}

  render() {
  	let currentPage = this.state.currentPage;
  	const preloaderImg = 'https://s3.amazonaws.com/lester-misc/crowded-resume/preloader.gif';
    return (
    	<div className='app'>
    		{/* PRELOADER OVERLAY */}
    		<div className={'loader ' + (currentPage ? 'hide' : '')}>
    		 	{ logo }
     		</div>
				
				{/* PAGE COMPONENTS */}
				<Home className={currentPage == 'home' ? 'active' : ''}/>
	  		<Skills className={currentPage == 'skills' ? 'active' : ''}/>
	  		<Experience className={(currentPage == 'experience' || currentPage == 'education') ? 'active' : ''}/>

	  	 	{/* COMMON ELEMENTS THAT SIT ON TOP OF PAGES */}
    		<div className='interface'>
	    		<Contact className={this.state.currentPage} />
	    		<Navigation 
	    			togglePage={this.togglePage} 
	    			home={this}
	    			className={this.state.currentPage}/>
	    	</div>
    	</div>
    );
  }
}
