import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Share } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';
import moment from 'moment';

import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

class EventDetails extends React.Component {

  state = {
    TextInputValueHolder: 'share this date with friends!'
  }

  getDate = (date) => {
    var date = moment(date).format('MMM Do YYYY, h:mm A');
    return date;
  }


  ShareMessage = () => {
    Share.share({
      message: this.state.TextInputValueHolder.toString()
    }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
  }

  render() {
    const event = this.props.navigation.state.params.entryId;
    const item = this.props.app.events.filter((e) => e.eventName === event);

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: item[0].eventImageUrl }} style={styles.image}></Image>
          <View style={styles.content}>
            <View styel={{ flex: 3 }}>
              <Text style={styles.contentTitle}>{item[0].eventName}</Text>
              <Text style={styles.contentSecondary}>{item[0].venueName}</Text>
              <Text style={styles.contentGeneral}>{this.getDate(item[0].eventDateTime)}</Text>
            </View>
            <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
              <Ionicons name='ios-heart-outline' size={30} color={'#2b7cff'} style={{ height: 40, width: 40, textAlign: 'center' }} />
              <Ionicons name='ios-share-outline' size={30} color={'#2b7cff'} style={{ height: 40, width: 40, textAlign: 'center' }} onPress={this.ShareMessage} />
            </View>
          </View>
          <View style={styles.codeContainer}>
            <Text style={styles.contentTitle}>QR Code</Text>
            <QRCode
              value={item.value}
              size={200}
              bgColor='black'
              fgColor='white' />
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
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  contentTitle: {
    fontSize: 22,
    color: '#333',
    fontWeight: '100'
  },
  contentSecondary: {
    fontSize: 16,
    color: '#333',
    fontWeight: '100'
  },
  contentGeneral: {
    fontSize: 14,
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