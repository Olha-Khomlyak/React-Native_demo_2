import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { VictoryPie, VictoryLabel } from 'victory-native';
import { Svg } from 'react-native-svg';
import PieChart from '../components/PieChart'
import Chart from '../components/Charts';

const hydrationData = [
  { x: "Mon", y: 2 },
  { x: "Tue", y: 5 },
  { x: "Wed", y: 3 },
  { x: "Thu", y: 7 },
  { x: "Fri", y: 3 },
  { x: "Sat", y: 5 },
  { x: "Sun", y: 9 }
];

const fertilizerData = [
  { x: "Mon", y: 4 },
  { x: "Tue", y: 1 },
  { x: "Wed", y: 5 },
  { x: "Thu", y: 3 },
  { x: "Fri", y: 8 },
  { x: "Sat", y: 2 },
  { x: "Sun", y: 4 }
];

const activeBtn = {backgroundColor: '#F2FAEA', marginRight:10, borderRadius:10};
const disabledBtn = {backgroundColor: '#FFFFFF'};
const activeTitle={ color: '#8BC349', fontWeight: '600' };
const disabledTitle={ color: '#D5D5D3', fontWeight: '600' }


export default class PlantPage extends Component {
  static navigationOptions = {
    headerShown: false,
    title: "",
    headerStyle: {
      shadowOpacity: 0,
    },
  };

  state = {
    graphData: hydrationData,
    btn1:activeBtn,
    btn2:disabledBtn,
    btnTitle1: activeTitle,
    btnTitle2: disabledTitle,
    animate:true
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ height: 270, backgroundColor: '#EEEEEE', borderBottomLeftRadius: 30 }}>
          <Text style={{ paddingTop: 55, paddingLeft: 20, fontSize: 20, fontWeight: '600', color: '#000' }}>Fig in the bedroom</Text>
          <Text style={{ paddingLeft: 20, fontWeight: 'normal', color: '#a09b9b', fontSize: 17 }}>(Ficus elastica)</Text>
          <View style={{ bottom: 0, position: 'absolute', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              resizeMode={'contain'}
              style={{ height: 170, marginLeft: 10 }}
              source={require('../assets/fig-big.png')} />
            <View>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#000', paddingBottom: 5 }}>Room temp</Text>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Icon
                  type='font-awesome-5'
                  name='temperature-low'
                  color='#a5cc70'
                  size={20}
                  iconStyle={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 20, color: '#000' }}>25</Text>
                <Text style={{ fontSize: 20, color: '#a09b9b', marginBottom: 30 }}>˚C</Text>
              </View>

              <Text style={{ fontSize: 12, fontWeight: '600', color: '#000', paddingBottom: 5 }}>Light</Text>
              <View style={{ flexDirection: 'row', alignSelf: 'baseline' }}>
                <Icon
                  type='feather'
                  name='sun'
                  color='#a5cc70'
                  size={20}
                  iconStyle={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 20, color: '#000' }}>60 </Text>
                <Text style={{ fontSize: 20, color: '#a09b9b' }}>%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 30, alignItems: 'center' }}>
          <Icon
            name='search1'
            type='antdesign'
            color='#8BC349'
            containerStyle={{ paddingRight: 5 }} />
          <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>Plant overview</Text>
        </View>

        <View style={{ justifyContent: 'center', marginTop: 30 }}>
          <View style={{ left: 100, position: 'absolute', width: '70%', backgroundColor: '#F1F1F1', borderRadius: 20, paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 35, }}>
              <Icon
                type='feather'
                name='droplet'
                color='#8fc0d2'
                size={30}
                iconStyle={{ paddingHorizontal: 5 }} />
              <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>Hydration</Text>
            </View>
            <Text style={{ paddingLeft: 40, fontSize: 17, color: 'gray' }}>Added 250ml 2 days ago</Text>
          </View>

          <View style={{ left: 10, backgroundColor: '#fff', padding: 10, borderRadius: 60, position: 'absolute' }}>
            <PieChart
              pieData={[{ y: 0 }, { y: 100 }]}
              animatedPieData={[{ y: 40 }, { y: 60 }]}
              number={60} />
          </View>
        </View>

        <View style={{ justifyContent: 'center', marginTop: 120 }}>
          <View style={{ left: 100, position: 'absolute', width: '70%', backgroundColor: '#F1F1F1', borderRadius: 20, paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 35, }}>
              <Icon
                type='entypo'
                name='leaf'
                color='#a5cc70'
                size={30}
                iconStyle={{ paddingHorizontal: 5 }} />
              <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}>Fertilizer</Text>
            </View>
            <Text style={{ paddingLeft: 40, fontSize: 17, color: 'gray' }}>Added 25ml 4 days ago</Text>
          </View>

          <View style={{ left: 10, backgroundColor: '#fff', padding: 10, borderRadius: 60, position: 'absolute' }}>
            <PieChart
              pieData={[{ y: 0 }, { y: 100 }]}
              animatedPieData={[{ y: 13 }, { y: 87 }]}
              number={87} />
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 30, top: 40, alignItems: 'center', justifyContent:'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='bar-graph'
              type='entypo'
              color='#8BC349'
              containerStyle={{ paddingRight: 5 }} />
            <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>Statistics</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Button
              title="Hydration"
              type="solid"
              onPress={() => this.setState({ graphData: hydrationData, btn2:disabledBtn, btn1:activeBtn, btnTitle1:activeTitle, btnTitle2:disabledTitle })}
              buttonStyle={this.state.btn1}
              titleStyle={this.state.btnTitle1}
            />
            <Button
              title="Fertilizer"
              type="solid"
              onPress={() => this.setState({ graphData: fertilizerData, btn1:disabledBtn, btn1:disabledBtn, btn2:activeBtn,btnTitle1:disabledTitle, btnTitle2:activeTitle})}
              buttonStyle={this.state.btn2}
              titleStyle={this.state.btnTitle2}
            />

          </View>
        </View>
        <Chart 
        graphData={this.state.graphData} 
        animate={this.state.animate}
        />
      </View>

    )
  }
}