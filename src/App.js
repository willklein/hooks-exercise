import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleClickOutside(event) {
    if (!this.modalNode.contains(event.target)) {
      this.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open</button>

        <div
          ref={(node) => (this.modalNode = node)}
          style={{
            display: this.state.modalIsOpen ? "block" : "none",
            border: "solid",
            padding: "5px",
            margin: "5px",
          }}
        >
          <h2 ref={(subtitle) => (this.subtitle = subtitle)}>Hello</h2>
          <div>I am a modal</div>
          <button onClick={this.closeModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default App;
