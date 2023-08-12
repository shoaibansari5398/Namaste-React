// const About = () => {
// 	return (
// 		<div className="about">
// 			<h2>About Us</h2>
// 			<h2>About Us</h2>
// 		</div>
// 	)
// }
// export default About;


import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
	constructor(props) {
		super(props);
		console.log("Parent Constructor")
		this.state = {
			count: 0,
			count2:1
		}
	}
	componentDidMount() {
		console.log("Parent Did Mount");


	}

	render() {

		return (
			<div>
				{console.log("Parent Render")}
				<p>Count : {this.state.count}</p>
				<button onClick={() =>
					this.state.count < 11 && this.setState({ count: this.state.count + 1 })
				}>Count+</button>
				<button onClick={() =>this.state.count > 0 &&
					this.setState({ count: this.state.count - 1 })
				}>Count-</button>
			{/* <UserClass name={"First" } />
			<UserClass name={"Second" } /> */}
			</div>
		)
	}
}

export default About;
