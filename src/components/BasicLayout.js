import React from 'react'


export default class BasicLayout extends React.PureComponent {
  render() {
    return <div className="App">{this.props.children}</div>
  }
}
