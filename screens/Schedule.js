import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import ToggleButton  from "../components/ToggleButton";

export default class Schedule extends React.Component {
    state = { 
        selectedDay: 'JUEVES'
      };
      handlePressItem = (item) => {
          this.setState({ selectedDay : item });
      }
    render() {
        const { selectedDay } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={require("../assets/hero.png")} >
                    <Image style={styles.logo} source={require("../assets/logo.png")} />
                    <Text style={styles.title}>React Europe</Text>
                    <ToggleButton items={[
                        "JUEVES",
                        "VIERNES"
                    ]} value={selectedDay} 
                    onPressItem={this.handlePressItem} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        paddingVertical: 30,
        height: null,
        width: null,
        justifyContent: "center",
        alignItems: "center"

    },
    logo: {
        width: 40,
        height: 40,
        marginBottom: 10
    },
    title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 24,
        marginBottom: 10
    }
});