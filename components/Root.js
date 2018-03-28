import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

import Login from './Login';
import Events from './EventList';
import EventDetails from './EventDetails';

import { userAuth } from '../actions/index';


const Stack = StackNavigator({
  EventList: {
    screen: Events,
    navigationOptions: {
      title: 'Event List',
      headerTintColor: '#3498db',
      headerStyle: {
        backgroundColor: '#f1f1f1'
      }
    }
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      title: 'Event Details',
      headerTintColor: '#3498db',
      headerStyle: {
        backgroundColor: '#f1f1f1'
      }
    }
  },
});


class Root extends React.Component {

  state = {
    logged: false
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.app.user ? <Stack /> : <Login />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    width: 100,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 7,
    overflow: 'hidden'
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center'
  },
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Root)