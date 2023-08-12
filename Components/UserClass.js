import React from 'react';

class UserClass extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props.name,"Constructor")
	}
	componentDidMount() {
		console.log(this.props.name, "ccomponent did mount")
	}
	render() {
		return (
			<div>
				{console.log(this.props.name,"Render")}
			</div>
		)
	}


}

export default UserClass;
