import React from 'react';
import { Constants } from "expo";
import { ScrollView, View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import GrowingTextInput from '../components/GrowingTextInput';

export default class Feedback extends React.Component {

    render(){
        return(
           <View style={{flex: 1}}> 
            <ScrollView
            keyboardDismissMode="on-drag"
            contentContainerStyle={{ paddingTop: 65 + 30}}
             style={styles.container}>
             <View style={[styles.row, styles.firstRow]}>
                <TextInput 
                    placeholder="Full name"
                    autoCapitalize='words'
                    autoCorrect={false}
                    returnKeyType="next"
                    style={styles.textInput}
                    onSubmitEditing={() => {this._emailInput.focus()}}
                    blurOnSubmit={false}
                />  
                </View>

                <View style={styles.row}>
                <TextInput
                    ref={view => { this._emailInput = view; }} 
                    autoCapitalize='none'
                    keyboardType="email-address"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholder="Email"
                    style={styles.textInput}
                    onSubmitEditing={() => {this._phoneNumberInput.focus()}}
                    blurOnSubmit={false}
               /> 
                </View>

                <View style={styles.row}>
                <TextInput
                    ref={view => { this._phoneNumberInput = view; }} 
                    keyboardType="phone-pad"
                    returnKeyType="done"
                    placeholder="Phone Number"
                    style={styles.textInput}
                    onSubmitEditing={() => {this._feedbackInput.focus()}}
                    blurOnSubmit={false}

                />
                  
                </View>

                <View style={styles.row}>
                <GrowingTextInput
                    minHeight={80}
                    ref={view => { this._feedbackInput = view; }} 
                    style={styles.growingTextInput}
                    placeholder="Escribe algo de retroalimentacion para ser felices"
               />  
                </View>



            </ScrollView>
            <View style={styles.navbar}>
                <Text style={styles.titleText}>Feedback</Text>
            </View>

            

            <StatusBar barStyle="light-content"></StatusBar>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F8F8F9'
    },
    navbar: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        height: 65,
        backgroundColor: '#050B7A',
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    row: {
      backgroundColor: '#fff',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#ccc'
    },
    textInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontWeight: '600'
    },
    firstRow: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc'
    },
    titleText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600'
    },
    growingTextInput:{
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 15
    }
})