//this file is used as a central data store for the app

module.exports	= {  
	logo: (<svg viewBox="0 0 320.3 49.7">
		<path d="M316.9,19.7h-19V9.3h22.4V0.7h-33.7V49h33.6v-8.6h-22.3V28.4h19V19.7z M269.7,29.2c0,3.5-0.8,6.4-2.4,8.6
			c-1.6,2.2-3.9,3.3-6.8,3.3c-3,0-5.4-1.1-7-3.3c-1.6-2.2-2.4-5.1-2.4-8.6v-8.8c0-3.5,0.8-6.3,2.4-8.5c1.6-2.2,3.9-3.3,7-3.3
			c3,0,5.3,1.1,6.9,3.3c1.6,2.2,2.4,5,2.4,8.5V29.2z M280.8,20.5c0-5.9-1.9-10.8-5.7-14.7c-3.8-3.9-8.7-5.8-14.8-5.8
			c-6.1,0-11.1,1.9-14.9,5.8c-3.8,3.9-5.7,8.8-5.7,14.7v8.7c0,6,1.9,10.9,5.7,14.7c3.8,3.9,8.8,5.8,14.9,5.8c6.1,0,11-1.9,14.8-5.8
			c3.8-3.9,5.7-8.8,5.7-14.7V20.5z M213.8,9.3c3,0,5.3,1,7,3.1c1.7,2,2.5,4.7,2.5,8.1v8.8c0,3.4-0.8,6.1-2.5,8.1s-4,3.1-7,3.1h-5.4
			V9.3H213.8z M214.6,49c5.7,0,10.4-1.8,14.3-5.5c3.8-3.7,5.7-8.5,5.7-14.3v-8.7c0-5.8-1.9-10.6-5.7-14.3c-3.8-3.7-8.6-5.6-14.3-5.6
			h-17.5V49H214.6z M173.9,0.7h-11.2v30.7l-0.2,0.1L144.9,0.7h-11.3V49h11.3V18.3l0.2-0.1L162.8,49h11.2V0.7z M126.7,0.7h-11.2V21
			H97.6V0.7H86.3V49h11.3V29.6h17.9V49h11.2V0.7z M69.3,29.2c0,3.5-0.8,6.4-2.4,8.6c-1.6,2.2-3.9,3.3-6.8,3.3c-3,0-5.4-1.1-7-3.3
			c-1.6-2.2-2.4-5.1-2.4-8.6v-8.8c0-3.5,0.8-6.3,2.4-8.5c1.6-2.2,3.9-3.3,7-3.3c3,0,5.3,1.1,6.9,3.3c1.6,2.2,2.4,5,2.4,8.5V29.2z
			 M80.5,20.5c0-5.9-1.9-10.8-5.7-14.7C71,1.9,66.1,0,60,0c-6.1,0-11.1,1.9-14.9,5.8c-3.8,3.9-5.7,8.8-5.7,14.7v8.7
			c0,6,1.9,10.9,5.7,14.7c3.8,3.9,8.8,5.8,14.9,5.8c6.1,0,11-1.9,14.8-5.8c3.8-3.9,5.7-8.8,5.7-14.7V20.5z M22.5,33.9
			c0,2.3-0.6,4.1-1.7,5.3c-1.1,1.3-2.4,1.9-4,1.9c-1.7,0-3.1-0.5-4.2-1.5c-1.1-1-1.6-2.7-1.6-5h-11L0,34.8c-0.1,4.9,1.4,8.7,4.4,11.2
			c3,2.5,7.2,3.8,12.4,3.8c4.8,0,8.8-1.4,12-4.3c3.2-2.9,4.8-6.7,4.8-11.6V0.7H22.5V33.9z"/>
	</svg>),
	homeGraphic: 'https://s3.amazonaws.com/lester-misc/crowded-resume/home.png',
	expGraphic: 'https://s3.amazonaws.com/lester-misc/crowded-resume/experience.png',
	eduGraphic: 'https://s3.amazonaws.com/lester-misc/crowded-resume/education.png',
	workExp: [
		{
			title: 'Junior Web Developer', 
			company: 'Apple Inc.', 
			dates: 'June 2015 to September 2016', 
			experience:[
				'Developed responsive corporate website',
				'Did some cool stuff',
				'Led team in closing out JIRA bugs']
		} , {
			title: 'Web Development Intern',
			company:  'Google Inc.',
			dates: 'January 2015 to May 2015',
			experience: [
				'Went on coffee runs for the team',
				'Team record for longest keg stand',
				'Once ate 82 cupcakes during a team building event'
			]
		} ],
	education: ['BBA', 'Michigan State University', '2.2', 'Computer Science', 'Drinking'],
	skillsGraphic: 'https://s3.amazonaws.com/lester-misc/crowded-resume/skills.png',
	devSkills: ['HTML5', 'JavaScript', 'Bootstrap', 'AngularJS', 'ReactJS', 'CSS3', 'Media Queries', 'Development'],
	pmSkills: ['JIRA', 'Bitbucket', 'Confluence', 'Git', 'GitHub']
}




