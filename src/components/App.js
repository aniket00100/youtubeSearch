import React from "react";
import SearchBar from "./searchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

// material UI imports
import Container from "@material-ui/core/Container";

class App extends React.Component {
  state = { term: "", videos: [], selectedVideo: null };

  // onTermSubmit = term => {
  //   youtube
  //     .get("/search", {
  //       params: {
  //         q: term
  //       }
  //     })
  //     .then(response => {
  //       this.setState({ videos: response.data.items });
  //     });
  //  // using promise here instead of async await
  // };

  // using async await sytax for asynchronous operation

  componentDidMount = () => {
    this.onTermSubmit("cats");
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log("running inside the selected video");
    //console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    console.log("from render", this.state.selectedVideo);
    return (
      <Container maxWidth="lg">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
