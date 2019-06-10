import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isFrontShowing: true
  }

  toggleSideShowing = (e) => {
    this.setState({
      isFrontShowing: !this.state.isFrontShowing
    })

    // FUNCTION PASSING TO SETSTATE
    // this.setState(prevState => ({
    //   isFrontShowing: !prevState.isFrontShowing
    // }))
  }

  render() {
    const img = this.state.isFrontShowing ?
      this.props.frontImg :
      this.props.backImg;

    return (
      <Card onClick={this.toggleSideShowing}>
        <div>
          <div className="image">
            <img alt="oh no!" src={img} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
