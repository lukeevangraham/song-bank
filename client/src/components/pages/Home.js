import React, { Component } from "react";
import API from "../../utils/API";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class Home extends Component {
  state = {
    songs: [],
  };

columns = [{
    dataField: 'id',
    text: 'Song ID'
  }, {
    dataField: 'title',
    text: 'Song Title'
  }, {
    dataField: 'performer',
    text: "Performer"
  }, {
    dataField: 'dateRecorded',
    text: "Date Recorded"
  }];

  componentDidMount() {
    this.loadSongs();
  }

  loadSongs = () => {
    API.getSongs()
      .then((res) => this.setState({ songs: res.data }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App mt-5">
        {/* <BootstrapTable keyField='id' data={ this.songs } columns={ this.columns } /> */}
        {this.state.songs.map(song => {
          console.log(song)
          return (
          <h6 key={song._id}>{song.title}</h6>
          )
        })}
      </div>
    );
  }
}

export default Home;
