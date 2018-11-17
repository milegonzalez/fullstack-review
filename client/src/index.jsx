import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      value: '',
    }
  }

  search(term) {
    console.log(`${term} was searched`);

    $.ajax({
      type: "POST",
      url: '/repos',
      data: { term },
      dataType: 'text'
    });
  }

  componentDidMount() {
    //should I fetch users from the server?
    // fetch("/repos")
    //   .then(res => res.json())
    //   .then(
    //     // console.log(result)
    //     (result) => {
    //       this.setState({
    //         repos: result.repos
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   )
  }


  render() {
    // console.log('this.state.term', this.state.term);
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));