// Libraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { blue, lightgray, white, darkGray } from '../utils/colors';
// Components
import Login from './Login';
import Events from './EventList';
import EventDetails from './EventDetails';
// Actions
import { userAuth } from '../actions/index';

// Views
const Stack = StackNavigator({
  EventList: {
    screen: Events,
    navigationOptions: {
      title: 'Event List',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: lightgray
      },
    }
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      title: 'Event Details',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: lightgray
      }
    }
  },
});

function Root(props) {
  return (
    <View style={{ flex: 1 }}>
      {props.app.user ? <Stack /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Root)