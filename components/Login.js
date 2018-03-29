import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import axios from 'axios';

import { lightgray, white, darkGray, green } from '../utils/colors';
import { userAuth, loginUser } from '../actions/index';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    msg: ''
  }

  submitUserLogin = () => {
    if (this.state.username || this.state.password) {
      const body = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.dispatch(loginUser(body))
    } else {
      this.setState({ msg: 'Fill out the form 🙃' });
    }
  }

  shouldComponentUpdate(){
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to Eventz!</Text>
        <TextInput
          autoCapitalize={'none'}
          placeholder={'username'}
          onFocus={() => this.setState({ msg: '' })}
          style={styles.input}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.text}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          autoCapitalize={'none'}
          placeholder={'password'}
          onFocus={() => this.setState({ msg: '' })}
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.text}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity onPress={() => this.submitUserLogin()} style={Platform.OS === 'ios' ? styles.btnIOS : styles.btnAndroid}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.msg}>
          <Text>{this.state.msg}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightgray
  },
  btnIOS: {
    width: width / 1.5,
    height: 44,
    padding: 10,
    backgroundColor: green,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  submitBtnText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '200'
  },
  input: {
    height: 35,
    width: width / 1.5,
    margin: 4,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '100',
    borderBottomWidth: 1,
    borderColor: green,
    borderRadius: 8,
    color: darkGray
  },
  btnAndroid: {
    width: width / 2.5,
    height: 44,
    padding: 10,
    backgroundColor: green,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  mainText: {
    fontSize: 28,
    color: green,
    fontWeight: '200',
    marginBottom: 40
  },
  msg: {
    marginTop: 20
  }
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Login)