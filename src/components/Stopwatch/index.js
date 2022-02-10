// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeelapsed: 0, istimerunning: false}

  clearinterval = () => clearInterval(this.timerid)

  increasetimeelapsed = () => {
    const {timeelapsed} = this.state
    this.setState({
      timeelapsed: timeelapsed + 1,
    })
  }

  starttimer = () => {
    this.timerid = setInterval(this.increasetimeelapsed, 1000)
    this.setState({istimerunning: true})
  }

  stoptimer = () => {
    this.clearinterval()
    this.setState({istimerunning: false})
  }

  resettimer = () => {
    this.clearinterval()
    this.setState({timeelapsed: 0, istimerunning: false})
  }

  gettime = () => {
    const {timeelapsed} = this.state
    const minutes = Math.floor(timeelapsed / 60)
    const seconds = Math.floor(timeelapsed % 60)

    const updatedminutes = minutes > 9 ? minutes : `0${minutes}`
    const updatedseconds = seconds > 9 ? seconds : `0${seconds}`

    return `${updatedminutes}:${updatedseconds}`
  }

  render() {
    const {istimerunning} = this.state
    const minutes = this.gettime()
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watchcontainer">
          <div className="timeimgcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watchimg"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="runningtimer">{minutes}</h1>
          <div className="buttonscontainer">
            <button
              type="button"
              className="button green"
              disabled={istimerunning}
              onClick={this.starttimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.stoptimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow"
              onClick={this.resettimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
