import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';

export class App extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container} >
        <Schedule />
     </View>
    );

    _handlePress = () => {
      this.props.navigation.navigate('Home');
    }
  }
}

export default StackNavigator({
  Home: {
    screen: App
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
