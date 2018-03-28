import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import { userAuth } from '../actions/index';

class Login extends React.Component {

  authenticate = () => {
    const user = { 
      auth: true, 
      name: 'Johann' 
    }

    this.props.dispatch(userAuth(user))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the login page</Text>
        <TouchableOpacity onPress={() => this.authenticate()}>
          <Text>Events</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps)(Login)