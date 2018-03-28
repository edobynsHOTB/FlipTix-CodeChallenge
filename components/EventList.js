import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { getEvents } from '../actions/index';

class Events extends React.Component {

  componentDidMount(){
    const headers = { 
      'Authorization': this.props.app.user.Authorization
     }
    this.props.dispatch(getEvents(headers))
  }


  render() {
   // console.log(this.props.app.events)
   const { events } = this.props.app;
  //  console.log(events)
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {events ? events.map((event) => {
					return(
            <ImageBackground key={event.eventName} style={{ flex: 1, margin: 4}} source={{ uri: event.eventImageUrl }}>
            <View style={styles.card}>
              <Text style={styles.cardText}>{event.eventName}</Text>
              <Text style={styles.cardText}>{event.venueName}</Text>
              <Text style={styles.cardText}>{event.eventDateTime}</Text>
            </View>
            </ImageBackground>
          );

        })
        :
        <Text>Waiting</Text>}
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignSelf: 'stretch',
		padding: 5
  },
  card: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,.4)',
		height: 200,
  },
  cardText: {
		fontSize: 20,
		color: '#fff'
	},
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Events);