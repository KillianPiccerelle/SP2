import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {IconButton} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import MenuItem from './MenuItem';
import UrgenceCallList from '../UrgenceCallEpic/UrgenceCallList';

const Menu = props => {
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Numéros d'urgences</Text>
        <Text style={styles.panelSubtitle}>
          Sélectionnez pour contacter en cas de besoin
        </Text>
      </View>
      <UrgenceCallList />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <MenuItem
          routeName={'LegalDocumentsScreen'}
          bgColor={'#00A3F2'}
          title={'Documents Légaux'}
          srcImg={'https://www.svgrepo.com/show/17165/folder.svg'}
        />
        <MenuItem
          routeName={'GeneralsInfosScreen'}
          bgColor={'#024893'}
          title={'Informations Générales'}
          srcImg={'https://www.svgrepo.com/show/177394/files-interface.svg'}
        />
      </View>
      <View style={styles.row2}>
        <MenuItem
          routeName={'AgendaScreen'}
          bgColor={'#024893'}
          title={'Agenda'}
          srcImg={'https://www.svgrepo.com/show/60439/agenda.svg'}
        />
        <MenuItem
          routeName={'MapScreen'}
          bgColor={'#00A3F2'}
          title={'Carte'}
          srcImg={'https://www.svgrepo.com/show/65818/map.svg'}
        />
      </View>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View style={styles.iconButton}>
        <IconButton
          icon="phone"
          size={40}
          onPress={() => bs.current.snapTo(0)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row1: {
    flexDirection: 'row',
    height: '50%',
    width: '50%',
  },
  row2: {
    flexDirection: 'row',
    height: '50%',
    width: '50%',
  },
  iconButton: {
    position: 'absolute',
    top: '87%',
    left: '75%',
    zIndex: 10,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    height: 330,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Menu;
