import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {st: true}

  bt = () => {
    this.setState(prev => {
      const {st} = this.state
      return {st: !prev.st}
    })
  }

  txt = () => {
    const {st} = this.state
    return st ? 'Login' : 'Logout'
  }

  cls = () => {
    const {st} = this.state
    return st ? 'Please Login' : 'Welcome User'
  }

  render() {
    const k = this.txt()
    const cl = this.cls()
    return (
      <div>
        <div>
          <h1>{cl}</h1>
          <button onClick={this.bt}>{k}</button>
        </div>
      </div>
    )
  }
}

export default Home
