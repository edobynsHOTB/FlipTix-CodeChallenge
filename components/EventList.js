import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Events extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Event List page</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetails')}>
          <Text>Details</Text>
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
});

export default connect()(Events);