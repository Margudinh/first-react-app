import React from 'react'
import {StyleSheet, View, Button, Text } from 'react-native'

export default class Home extends React.Component {

    render = () => (
        <View style = {styles.container}>
            <Text>There are no happy little trees</Text>
            <Button title="Add trees" onPress = {() => {this.props.navigation.navigate('Trees')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});