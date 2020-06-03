import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
      }
      }
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            datetime: new Date()
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      render() {
        console.log('render')
        return (
          <div>{this.state.datetime.toLocaleString()}</div>
        )
      }
   
}
export default TheDate
const milliseconds = 1000 //how does it know this milliseconds
setInterval(
  function callback() {
    // update the state.date in here
  },
  milliseconds
)