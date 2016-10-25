import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
    }

    componentDidMount() {
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps) {
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState) {
        // Called when the props and/or state change
    }

    componentWillUnmount() {
        // Called when the component is removed
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;