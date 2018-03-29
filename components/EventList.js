import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

import { getEvents } from '../actions/index';

class Events extends React.Component {

  componentDidMount() {
    var now = moment('2018-03-27T23:00:00Z').format('MMM Do YYYY, h:mm:ss A');
    console.log(now);
    const headers = {
      'Authorization': this.props.app.user.Authorization
    }
    this.props.dispatch(getEvents(headers))
  }

  getDate = (date) => {
    var date = moment(date).format('MMM Do YYYY, h:mm A');
    return date;
  }


  render() {
    const { events } = this.props.app;
    console.log(events);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {events ? events.map((event) => {
          return (
            <ImageBackground key={event.eventName} style={styles.backgroundImage} source={{ uri: event.eventImageUrl }}>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('EventDetails', { entryId: event.eventName })}>
                <View style={styles.card}>
                  <Text style={styles.contentTitle}>{event.eventName}</Text>
                  <Text style={styles.contentSecondary}>{event.venueName}</Text>
                  <Text style={styles.contentGeneral}>{this.getDate(event.eventDateTime)}</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          );
        })
          :
          <Text>Waiting</Text>
        }
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
    backgroundColor: 'rgba(0,0,0,.5)',
    height: 200,
  },
  contentTitle: { 
    fontSize: 22, 
    color: '#333', 
    color: '#fff',
    margin: 8
  },
  contentSecondary: { 
    fontSize: 16, 
    color: '#333', 
    fontWeight: '100',
    color: '#fff' 
  },
  contentGeneral: { 
    fontSize: 14, 
    color: '#333', 
    fontWeight: '100',
    color: '#fff' 
  },
  backgroundImage: { flex: 1, margin: 4 },
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(Events);