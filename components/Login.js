import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import axios from 'axios';

import { userAuth } from '../actions/index';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    msg: ''
  }


  submitUserLogin = () => {
    const body = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://18.144.44.44:5000/api/v1/login', body, {
      headers: { 'api-key': 'hotbsoftware123456' }
    }).then((response) => {
      this.props.dispatch(userAuth(response.data));
    })
      .catch((error) => {
        this.setState({ msg: 'OOPS! Try again 🙃' })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to Eventz</Text>
        <TextInput
          autoCapitalize={'none'}
          placeholder={'username'}
          onFocus={() => this.setState({ msg: '' })}
          style={styles.input}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.text}
        />
        <TextInput
          autoCapitalize={'none'}
          placeholder={'password'}
          onFocus={() => this.setState({ msg: '' })}
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.text}
        />
        <TouchableOpacity onPress={() => this.submitUserLogin()}>
          <Text>Submit</Text>
        </TouchableOpacity>

        <View>
          <Text>{this.state.msg}</Text>
        </View>
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
  input: {
    height: 30,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    textAlign: 'center'
  },
  mainText: {
    fontSize: 20,
    color: 'lightblue'
  }
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Login)