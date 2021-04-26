import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {fetchEvents} from '../../../API/events';

import {getEvents} from '../../../redux/selectors';
import AgendaListItem from './agendaListItem';

const agendaList = () => {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);

  useEffect(() => {
    fetchEvents(dispatch);
  }, []);

  const _renderItem = ({item}) => {
    return <AgendaListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#024893',
    alignItems: 'center',
  },
  separator: {
    height: 4,
  },
});

export default agendaList;
