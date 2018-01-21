import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class EventDetails extends React.Component {

  static navigationOptions = {
    title: 'Event Detail'
  };

  render() {
   
    let { item } = this.props.navigation.state.params;
    console.log(item);
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Thursday, May 18</Text>
          <Text style={styles.description}></Text>

        </View>
        <View style={styles.speakerContainer}>
          <Image 
          style={styles.image}
          source={{ uri: "http://unsplash.it/40/40" }} 
          //source = {require('./assets/icon.png')}

          />
          <View style={styles.speakerDetailsContainer}>
            <Text style={styles.speakerName}>Name: {item.speaker}</Text>
            <Text style={styles.speakerBio}>{item.title}</Text>
          </View>
        </View>
      </View>
    );

    _handlePress = () => {
      this.props.navigation.navigate('Home');
    }
  }
}


const IMAGE_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  detailsContainer: {
    paddingVertical: 30, 
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12
  },
  description: {
    fontSize: 13,
    
  },
  speakerContainer: {
    flexDirection: 'row',
    paddingVertical: 30, 
    paddingHorizontal: 20,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE/2,
    backgroundColor: "grey",
    marginRight: 10
  },
  speakerDetailsContainer:{
    justifyContent: "center"
  },
  speakerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500'
  },
  speakerBio: {
    fontSize: 16,
    fontWeight: '300'
  }

});
