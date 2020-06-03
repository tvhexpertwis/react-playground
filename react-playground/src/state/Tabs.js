import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
};
state = {
  currentTabIndex: 0
};
    /* ... */
  } handleButtonClick(index) {
    this.setState({ currentTabIndex: index })
  }
  }
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[0]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
    render() {
        return (
          <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
      } {
        const buttons = /* ... */
    const currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
        {this.props.tabs.length && (
        <div className='content'>
          {currentTab.content}
        </div>
    
    )
  }
  
  
  export default Tabs;

describe(`Tabs Component`, () => {

  it('renders empty given no tabs', () => {

}) 
  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
}) 
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

  const tabsProp = [/* ... */];

class App extends React.Component {
  render() {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
}

export default App;
exports[`Tabs Component renders the first tab by default 1`] = `
exports[`Tabs Component renders empty given no tabs 1`] = `
<div>
  0
</div>
`;
<div>

  <button>
    First tab
  </button>
  <button>
    Second tab
  </button>
  <button>
    Third tab
  </button>
  <div
    className="content"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.
  </div>
</div>
`;
 \import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs'

describe(`Tabs Component`, () => {
  const tabsProp = [/* contents not shown */]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
it('closes the first tab and opens any clicked tab', () => {
  const wrapper = shallow(<Tabs tabs={tabsProp} />)
})
wrapper.find('button')
console.log('>>> WRAPPER <<<')
console.log(wrapper.debug())
console.log('>>> FIND(BUTTON) <<<')
console.log(wrapper.find('button').debug())
console.log(wrapper.find('button').at(1).debug())
it('closes the first tab and opens any clicked tab', () => {
  const wrapper = shallow(<Tabs tabs={tabsProp} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})