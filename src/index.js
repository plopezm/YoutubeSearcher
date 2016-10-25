import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'

const API_KEY= 'AIzaSyAOs0Z5UPh-HHImr2r_mMYrbf_U1E1xNdY';


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo: selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));