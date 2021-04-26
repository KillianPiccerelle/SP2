import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
//Import library for AddCalendarEvent
import * as AddCalendarEvent from 'react-native-add-calendar-event';

//Import moment.js to deal with time
import moment from 'moment';

const utcDateToString = momentInUTC => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

const agendaListItem = ({item}) => {
  const dateStart = () => {
    if (item.timeStart != null) {
      return utcDateToString(moment(item.dateStart + ' ' + item.timeStart));
    } else {
      return utcDateToString(moment(item.dateStart));
    }
  };

  const dateEnd = () => {
    if (item.dateEnd != null && item.timeEnd != null) {
      return utcDateToString(moment(item.dateEnd + ' ' + item.timeEnd));
    } else if (item.dateEnd != null && item.timeEnd == null) {
      return utcDateToString(moment(item.dateEnd));
    } else {
      return utcDateToString(moment(item.dateStart).add(3, 'days'));
    }
  };

  const addToCalendar = () => {
    const eventConfig = {
      title: item.title,
      startDate: dateStart(),
      endDate: dateEnd(),
      notes: item.description,
      location: item.postalCode + ' ' + item.city + ' ' + item.address,
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
        titleColor: 'blue',
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        alert('eventInfo -> ' + JSON.stringify(eventInfo));
      })
      .catch(error => {
        // handle error such as when user rejected permissions
        alert('Error -> ' + error);
      });
  };

  const toggleEndDate = () => {
    if (item.dateEnd != null && item.timeEnd != null) {
      return (
        <View>
          <Icon name="keyboard-arrow-down" size={30} color="black" />
          <Text style={styles.endDayEvent}>
            {moment(item.dateEnd).format('DD/MM')}
          </Text>
          <Text style={styles.endHourEvent}>
            {moment(item.timeEnd, 'hh:mm').format('hh:mm')}
          </Text>
        </View>
      );
    } else if (item.dateEnd == null) {
      return <View></View>;
    } else {
      return (
        <View>
          <Icon name="keyboard-arrow-down" size={30} color="black" />
          <Text style={styles.endDayEvent}>
            {moment(item.dateEnd).format('DD/MM')}
          </Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        addToCalendar();
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./../../../../assets/colornetwork.png')}
          />
        </View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.description}</Text>
          <Text style={styles.location}>
            {item.postalCode + ' ' + item.city + ' ' + item.address}
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <Text style={styles.help}>{': ' + item.contact_phone}</Text>
            <Text style={styles.help}>{': ' + item.contact_mail}</Text>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.startDayEvent}>
            {moment(item.dateStart).format('DD/MM')}
          </Text>
          {item.timeStart != null ? (
            <Text style={styles.startHourEvent}>
              {moment(item.timeStart, 'hh:mm').format('hh:mm')}
            </Text>
          ) : (
            <View></View>
          )}
          {toggleEndDate()}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: 345,
    borderRadius: 10,
  },
  imageContainer: {
    width: '20%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'center',
  },
  containerCenter: {
    width: 220,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 10,
  },
  location: {
    fontSize: 10,
    paddingTop: 5,
  },
  help: {
    fontSize: 10,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  startDayEvent: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  startHourEvent: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  endDayEvent: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  endHourEvent: {
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default agendaListItem;
