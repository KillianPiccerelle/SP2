import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import UrgenceCallListItem from './urgenceCallItem';

const UrgenceCallList = () => {
  const dispatch = useDispatch();

  const PhonesNumber = [
    {
      id: '1',
      libelle: 'SAMU : ',
      phoneNumber: '15',
      image: 'https://www.svgrepo.com/show/61711/nurse.svg',
    },
    {
      id: '2',
      libelle: 'Police : ',
      phoneNumber: '17',
      image: 'https://www.svgrepo.com/show/35009/policeman.svg',
    },
    {
      id: '3',
      libelle: 'Pompiers : ',
      phoneNumber: '18',
      image: 'https://www.svgrepo.com/show/46861/firefighter.svg',
    },
    {
      id: '4',
      libelle: 'Centre anti-poisons : ',
      phoneNumber: '02 34 34 34 34',
      image: 'https://www.svgrepo.com/show/193172/gas-mask.svg',
    },
    {
      id: '5',
      libelle: 'Police Municipale : ',
      phoneNumber: '02 51 47 47 00',
      image: 'https://www.svgrepo.com/show/277301/police-car.svg',
    },
    {
      id: '6',
      libelle: 'EDF - GDF Dépannage : ',
      phoneNumber: '0 810 333 285',
      image: 'https://www.svgrepo.com/show/229630/walkie-talkie.svg',
    },
  ];

  const _renderItem = ({item}) => {
    return <UrgenceCallListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PhonesNumber}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
});

export default UrgenceCallList;
