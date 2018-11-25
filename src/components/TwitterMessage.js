import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value}, () => console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <strong>{this.props.maxChars - this.state.message.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
