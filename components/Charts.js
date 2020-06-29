import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'

import { Svg } from 'react-native-svg';

export default class Charts extends Component {
  state = {
    pieData: this.props.pieData,
    animate:this.props.animatedData
  }
  componentDidMount() {
    this.setState({
      pieData: this.props.animatedData
    })
  }
  render() {
    return (
      <VictoryChart height={250}>
        <VictoryBar
          style={{ data: { fill: "#96C160" } }}
          data={this.props.graphData}
          animate={this.props.animate}          
        />
        <VictoryAxis style={{ axis: { stroke: "none" }, tickLabels: {fill: '#c3c3c3' }, }}   />
      </VictoryChart>
    )
  }
}