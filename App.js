// Libraries 
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Components
import Login from './components/Login';
import Events from './components/EventList';
import EventDetails from './components/EventDetails';
import Root from './components/Root';
// StatusBar
function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
// Redux store configuration
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
// App entry point
export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <MyStatusBar barStyle='dark-content' />
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

