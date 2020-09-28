import React, { Component } from 'react';

class Form extends Component {
	state = {
		firstName: '',
		email: '',
	};

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

	render() {
		return (
			<div>
                firstName : {this.state.firstName}
                <br/>
                email: { this.state.email}
				<p>
					<input name='firstName' type='text' onChange={this.handleChange} />
				</p>
				<p>
					<input name='email' type='email' onChange={this.handleChange} />
				</p>
			</div>
		);
	}
}

export default Form;
