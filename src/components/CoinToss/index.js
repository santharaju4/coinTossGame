// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    updateImageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onChangeButton = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = heads
    let latestTailsCount = tails

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }
    this.setState({
      updateImageUrl: tossImage,
      heads: latestHeadsCount,
      tails: latestTailsCount,
    })
  }

  render() {
    const {updateImageUrl, heads, tails} = this.state
    const totalCount = heads + tails

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>

          <img src={updateImageUrl} alt="toss result" className="logo" />

          <button
            className="button"
            type="button"
            onClick={this.onChangeButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
