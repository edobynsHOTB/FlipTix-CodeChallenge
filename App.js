import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import reducer from './reducers';
import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import Login from './components/Login';
import Events from './components/EventList';
import EventDetails from './components/EventDetails';
import Root from './components/Root';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

function configureStore(initialState) {
  const enhancer = compose(
      applyMiddleware(
          thunkMiddleware, 
      ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default function App() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MyStatusBar backgroundColor={'gray'} barStyle='light-content' />
          <Root /> 
        </View>
      </Provider>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

