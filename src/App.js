import { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedvideo] = useState(null);
  const [videos, search] = useVideos('super cars');

  useEffect(() => {
    setSelectedvideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedvideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit('super cars');
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get('/search', {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({
//       selectedVideo: video,
//     });
//   };

//   render() {
//     return (
//       <div className='ui container'>
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className='five wide column'>
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
