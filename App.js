import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TapNavigator } from 'react-navigation';
import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';
import Feedback from './screens/Feedback';


const ScheduleStack = StackNavigator({
  ScheduleList : { screen: Schedule},
  EventDetails : { screen: EventDetails}
}, {
  headerMode: 'screen'
});



export default class App extends React.Component {

  

  render() {
    return (
      <View style={styles.container} >
        <ScheduleStack />
     </View>
    );

    _handlePress = () => {
      const { navigate } = this.props.navigation
      navigate('Home');
    }
  }
}

/*export class StackNavigator({
  Home: {
    screen: App
  }
})
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
