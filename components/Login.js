import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import axios from 'axios';

import { userAuth } from '../actions/index';

const { height, width } = Dimensions.get('window');

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
        if(this.state.username || this.state.password){
          this.setState({ msg: 'OOPS! Try again 🙃' })
        }
      })
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
        />
        <TextInput
          autoCapitalize={'none'}
          placeholder={'password'}
          onFocus={() => this.setState({ msg: '' })}
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.text}
        />
        <TouchableOpacity onPress={() => this.submitUserLogin()} style={styles.submitBtn}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecccc'
  },
  submitBtn: {
    width: width / 1.5,
    height: 44,
    padding: 10,
    backgroundColor: '#00a080',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '200'
  },
  input: {
    height: 35,
    width: width / 1.5,
    borderColor: 'gray',
    margin: 4,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '100',
    borderBottomWidth: 1,
    borderColor: '#00a080',
    borderRadius: 8,
    color: '#333'
  },
  mainText: {
    fontSize: 28,
    color: '#00a080',
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