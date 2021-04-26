import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import AgendaList from '../components/AgendaEpic/AgendaList/';
import Header from '../components/_Shared/Header';

const AgendaScreen = ({route, navigation}) => {
  const {titleHeader} = route.params;

  return (
    <View>
      <Header
        title={titleHeader}
        paddingLTitle={60}
        paddingRTitle={110}
        srcImg={'https://www.svgrepo.com/show/60439/agenda.svg'}
      />
      <View style={styles.scrollViewContainer}>
        <AgendaList />
      </View>
      <View style={styles.footerContainer}>
        <View style={{justifyContent: 'center'}}>
          <Icon
            name="home"
            size={40}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 10}}>
            Vous pouvez changer la période affichée grâce aux boutons ci-dessous
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button title="7 jours" />
            <Button title="15 jours" />
            <Button title="30 jours" />
            <Button title="60 jours" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: '100%',
    height: '78%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#024893',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#FFBF00',
  },
});

export default AgendaScreen;
