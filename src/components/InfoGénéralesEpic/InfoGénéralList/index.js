import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {fetchInfoGenerals} from '../../../API/generalInformation';

import {getGeneralInformation} from '../../../redux/selectors';
import InfoGeneListItem from './infoGeneListItem';

const InfoGeneList = () => {
  const dispatch = useDispatch();
  const InfoGene = useSelector(getGeneralInformation);

  useEffect(() => {
    fetchInfoGenerals(dispatch);
  }, []);

  const _renderItem = ({item}) => {
    return <InfoGeneListItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={InfoGene}
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

export default InfoGeneList;
