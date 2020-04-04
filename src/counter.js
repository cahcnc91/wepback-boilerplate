import React from "react"
import styles from "./main.css"
import styled from '@emotion/styled'

let Fancy = styled.h1`
color: ${props =>
  props.primary ? 'hotpink' : 'turquoise'};
`
const red = "#f00"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const primary = this.state.count % 2 === 0
    return (
      <div className={styles.counter} onClick={this.climb.bind(this)}>
        <Fancy primary={primary}>{this.state.count}</Fancy>
      </div>
    )
  }
}