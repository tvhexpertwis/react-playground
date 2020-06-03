//drill 1

import React from 'react';



//class before this? If State? Then Yes, but can use functional now
class HelloWorld extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      who: "Jordan",
      likes: 52,
      comments: [
        {
          username: 'Mattlikescoding',
          comment: 'Nice pic Jordan!'
        },
        {
          username: 'Randomguy47',
          comment: 'Love it!'
        }
      ]
    }

    this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(wordToChange) {
    this.setState({
      who: wordToChange
    });
  }

  handleLikeButtonClick() {
    // Whenever the button is clicked, increase likes by 1
    const newLikeCount = this.state.likes + 1;
    
    this.setState({
      likes: newLikeCount
    });
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <p>Jordanisawesome</p>
        <p>{this.state.likes} likes</p>
        <p>This is my picture</p>
        <ul>
          {this.state.comments.map((item, i) =>{
            return (
              <div>
                <li key={i}><strong>{item.username}</strong>: {item.comment}</li>
                <p>Comment #{i+1}</p>     
              </div>
            )
          })}
        </ul>

        <br></br>
        <br></br>

        <button onClick={() => this.handleLikeButtonClick()}>Like Button</button>
        <button onClick={() => this.handleButtonClick('world!')}>World</button>
        <button onClick={() => this.handleButtonClick('friend!')}>Friend</button>
        <button onClick={() => this.handleButtonClick('react!')}>React</button>
      </div>
    )
  }
}



// function HelloWorld() {

//   return (
//       <div> 
//         <p>"Hello, world"</p>
//         <button>World</button>
//         <button>Friend</button>
//         <button>React</button>
//       </div>
//   )
// };

export default HelloWorld;

//how to update index.js? Go to index.js, import component, render component

// </div>
//   
//     
    
//   }
//   handleButtonClick = (React) => {
//     console.log('Hello React', this.state)

//     handleButtonClick = (Friend) => {
//         console.log('Hello friend', this.state)

 drill 2

 import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}
// //Class?
// function Bomb(){
//     <div>"tick", "tock", "boom" </div>
//     constructor(props) {
//         super(props)
//         this.state = {
//           count: 0
//         }
//         this.handleButtonClick = this.handleButtonClick.bind(this)
//       }

// }

// //drill3

import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}