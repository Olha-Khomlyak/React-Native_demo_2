import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { Svg } from 'react-native-svg';
import { defined } from 'react-native-reanimated';

const data = [{ y: 40 }, { y: 60 }];
const animatedData = [{y:0}, {y:100}];
const color = ['#fff', '#ACD07B'];
const { width } = Dimensions.get('window');
const height = width * 0.6;


export default class PieChart extends Component {
    state = {
        pieData: this.props.pieData
      }
      componentDidMount() {
        this.setState({
          pieData: this.props.animatedPieData
        })
    }
    render() {
        return (
            <Svg style={{width: 100, height: 100}}>
                <VictoryPie
                    data={this.state.pieData}
                    animate={{
                      duration: 10
                    }}
                    // style={{
                    //     parent: { borderWidth: 1, borderColor: '#404040'},
                    // }}
                    height={100}
                    width={100}
                    colorScale={color}
                    innerRadius={50}
                    labels={() => null}
                    padding={{ top:15, bottom:15}} 
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    style={[{ fontSize: 25, color: '#28323B', fontWeight: '600', lineHeight: 40}, { fontWeight: '600', fontSize: 16 }]}
                    x={width * 0.125} y={height * 0.2}
                    text={`${this.props.number}%`}
                />
            </Svg>
        )
    }
}