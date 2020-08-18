import React, { Component } from "react";
import API from "../../utils/API"

class Submit extends Component {
  state = {
    title: "",
    performer: "",
    dateRecorded: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.title) {
        API.saveSong({
            title: this.state.title,
            performer: this.state.performer,
            dateRecorded: this.state.dateRecorded
        })
        // .then(res => this.loadSongs())
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Submit</h2>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-6">
              <form className="text-left mt-4">
                <div className="form-group">
                  <label htmlFor="inputSong">Song Title</label>
                  <input
                    value={this.state.title}
                    name="title"
                    onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    id="inputSong"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPerformer">Performer</label>
                  <input
                  value={this.state.performer}
                  name="performer"
                  onChange={this.handleInputChange}
                    type="text"
                    className="form-control"
                    id="inputPerformer"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDateRecorded">Date Recorded</label>
                  <input
                  value={this.state.dateRecorded}
                  name="dateRecorded"
                  onChange={this.handleInputChange}
                    type="date"
                    className="form-control"
                    id="inputDateRecorded"
                  />
                </div>
                <button onClick={this.handleFormSubmit} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;
