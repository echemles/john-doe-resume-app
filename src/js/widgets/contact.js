export default class Contact extends React.Component {

  render() {
    return <div className={'contact ' + this.props.className}>
	    <a className='phone' href='tel:(555)555-5555' />
    	<a className='mail' href='mailto:johndoe@example.com' />
    </div>
  }
}