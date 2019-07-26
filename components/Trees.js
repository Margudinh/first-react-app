import React, { Component } from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';

export default class Trees extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Button title = "Add Happy little tree" />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});