import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SectionList, TouchableOpacity } from 'react-native';
import ToggleButton  from "../components/ToggleButton";

const sections = 
    {
        JUEVES: [
            { 
                id : '8:30 AM',
                data : [
                    {
                        id: 0,
                        title: 'Registration, Breakfast'
                    }
                ]
            },
            {
                id: '10:00 AM',
                data: [
                    {id: 0,
                    title: 'Conference Keynote',
                    speaker: 'Lucy Vetnu'}
                ]
            }
            ],
            VIERNES: [
                { 
                    id : '10:30 AM',
                    data : [
                        {
                            id: 0,
                            title: 'More... Breakfast'
                        }
                    ]
                },
                {
                    id: '12:00 AM',
                    data: [
                        {id: 0,
                        title: 'More Conference Keynote',
                        speaker: 'Lucy Vetnu'}
                    ]
                }
            ]
        }

const extractKey = ({id}) => id;

export default class Schedule extends React.Component {

    static navigationOptions = {
        header: null
      };

    state = { 
        selectedDay: 'JUEVES'
      };

      handlePressItem = item => {
          this.setState({ selectedDay : item });
      }

      renderSectionHeader = ({section}) => {
          return(
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.id}</Text>
            </View>
          )

      }

      _handlePressRow = item => {
          this.props.navigation.navigate('EventDetails', {item});
      }

      renderItem = ({item}) => {
        return(
          <TouchableOpacity 
          style={styles.row}
          onPress={() => this._handlePressRow(item)}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowSpeaker}>{item.speaker}</Text>
          </TouchableOpacity>
        )
    }

    render() {
        const { selectedDay } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={require("../assets/hero.png")} >
                    <Image style={styles.logo} source={require("../assets/logo.png")} />
                    <Text style={styles.title}>React Europe</Text>
                    <ToggleButton 
                    items={["JUEVES", "VIERNES"]}
                    value={selectedDay} 
                    onPressItem={this.handlePressItem} />
                </ImageBackground>
                    <SectionList 
                    style={styles.list}
                    sections={selectedDay === 'JUEVES' ? sections.JUEVES : sections.VIERNES}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={extractKey}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    list: {
        flex: 1
    },
    sectionHeader:{
        backgroundColor: 'whitesmoke',
        padding: 20
    },
    sectionHeaderText:{
        fontSize: 13
    },
    row:{
        backgroundColor: 'white',
        padding: 20
    },
    rowTitle:{
        fontSize: 13,
        fontWeight: '500'
    },
    rowSpeaker:{
        fontSize: 13
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