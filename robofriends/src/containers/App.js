import React from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { setSearchText, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchText: state.searchRobots.searchText,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchText(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends React.PureComponent {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchText, onSearchChange, robots, isPending } = this.props;
    if (isPending) {
      return (
        <div className="tc">
          <h1>Loading...</h1>
        </div>
      );
    }
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchText)
    );
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
