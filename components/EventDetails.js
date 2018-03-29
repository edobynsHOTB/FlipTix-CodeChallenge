import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';
import moment from 'moment';

const { height, width } = Dimensions.get('window');

class EventDetails extends React.Component {

  getDate = (date) => {
    var date = moment(date).format('MMM Do YYYY, h:mm A');
    return date;
  }

  render() {
    const event = this.props.navigation.state.params.entryId;
    const item = this.props.app.events.filter((e) => e.eventName === event);

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: item[0].eventImageUrl }} style={styles.image}></Image>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{item[0].eventName}</Text>
            <Text style={styles.contentSecondary}>{item[0].venueName}</Text>
            <Text style={styles.contentGeneral}>{this.getDate(item[0].eventDateTime)}</Text>
          </View>
          <View style={styles.codeContainer}>
            <Text style={styles.contentTitle}>QR Code</Text>
            <QRCode
              value={item.value}
              size={200}
              bgColor='black'
              fgColor='white'/>
          </View>
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
  },
  content: { 
    width, 
    padding: 15, 
    backgroundColor: '#f2f2f2', 
    justifyContent: 'space-around' 
  },
  contentTitle: { 
    fontSize: 22, 
    color: '#333', 
    fontWeight: '100' 
  },
  contentSecondary: { 
    fontSize: 18, 
    color: '#333', 
    fontWeight: '100' 
  },
  contentGeneral: { 
    fontSize: 16, 
    color: '#333', 
    fontWeight: '100' 
  },
  codeContainer: { 
    flex: 2, 
    width, 
    padding: 15, 
    justifyContent: 'space-around', 
    alignItems: 'center' 
  },
  image: { 
    height: height / 4, 
    width 
  }
});

mapStateToProps = (app) => {
  return {
    app
  }
}

export default connect(mapStateToProps)(EventDetails);