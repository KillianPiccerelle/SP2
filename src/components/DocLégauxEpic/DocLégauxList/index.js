import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {fetchLegalDocuments} from '../../../API/legalDocuments';

import {getLegalDocuments} from '../../../redux/selectors';
import DocLegauxListItem from './docLegauxListItem';

const DocLegauxList = () => {
  const dispatch = useDispatch();
  const legalDocuments = useSelector(getLegalDocuments);

  useEffect(() => {
    fetchLegalDocuments(dispatch);
  }, []);

  const _renderItem = ({item}) => {
    return <DocLegauxListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={legalDocuments}
        renderItem={_renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 210,
    alignItems: 'center',
    paddingTop: 10,
  },
  separator: {
    height: 4,
  },
});

export default DocLegauxList;
