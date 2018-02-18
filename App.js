import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator, TapNavigator, TabNavigator } from 'react-navigation';
import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';
import Feedback from './screens/Feedback';


const ScheduleStack = StackNavigator({
  ScheduleList : { screen: Schedule},
  EventDetails : { screen: EventDetails}
}, {
  headerMode: 'screen'
});

const FeedbackStack = StackNavigator({
  FeedbackForm : { screen: Feedback}
});

const AppNavigation = TabNavigator({
  Schedule: { screen: ScheduleStack },
  Feedback: { screen: FeedbackStack }
})



export default class App extends React.Component {

  

  render() {
    return (
      <View style={styles.container} >
        <AppNavigation />
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
