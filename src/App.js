import { Component } from 'react'
import SearchBox from './components/search-box/search-box.components'
import CardList from './components/card-list/card-list.components'
import logo from './logo.svg';
import './master.css';
class App extends Component {
  constructor() {
    super()
    console.log(`Hello i'm the constructor, i only get called once and first one`)
    this.state = {
      name: 'Nadim',
      monsters: [],
      searchField: ''
    }
  }
  onSearchChange = (event) => {
    /**
     * Every time we type here , the render method get's called, because of the this.setState
     */
    // this.setState({ name: event.target.value })
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() }
    }, () => {
      console.log('Done')
    })
  }
  componentDidMount() {
    console.log(`Hello i'm componentDidMount, i get called one time, when our application mounts`)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState(() => {
        return { monsters: data }
      }, () => {
        console.log(this.state.monsters)
      })
      )
  }
  render() {
    let filtered = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })
    console.log(`Hello i'm render, and i get called before the component did mount`)
    return (
      <div className="parent" >
        <SearchBox onSearchChange={this.onSearchChange} placeholder='Search monsters:' className='serach-box' />
        <CardList filtered={filtered} />
      </div>
    )
  }
}

export default App;
