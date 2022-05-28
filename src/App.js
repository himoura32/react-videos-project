import React from 'react';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
