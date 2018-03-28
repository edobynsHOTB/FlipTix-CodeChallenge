import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import reducer from './reducers';

// COMPONENTS
import Login from './components/Login';
import Events from './components/EventList';
import EventDetails from './components/EventDetails';
import Root from './components/Root';

// icons
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerTintColor: '#3498db',
      headerStyle: {
        backgroundColor: '#f1f1f1'
      }
    }
  },
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


export default class App extends React.Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor={'gray'} barStyle='light-content' />
          <Root /> 
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

