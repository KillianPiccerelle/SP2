import React from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import HeaderWithoutBack from '../components/_Shared/HeaderWithoutBack';
import ReadSection from '../components/_Shared/ReadSection';
import InfoGeneList from '../components/InfoGénéralesEpic/InfoGénéralList';

const GeneralInformationScreen = ({route}) => {
  const {titleHeader} = route.params;
  const [text, onChangeText] = React.useState(null);
  const navigation = useNavigation();

  return (
    <View>
      <HeaderWithoutBack
        title={titleHeader}
        paddingLTitle={1}
        paddingRTitle={1}
        srcImg={'https://www.svgrepo.com/show/177394/files-interface.svg'}
      />
      <ReadSection
        title="INFORMATIONS GÉNÉRALES"
        subtitle="Sélectionner une catégorie ou utiliser la barre de recherche afin de consulter les documents"
        srcImg={require('../../assets/logo.png')}
      />
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View style={styles.homeIcon}>
            <Icon
              name="home"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.refreshIcon}>
            <Icon
              name="refresh"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Recherche"
              keyboardType="numeric"
            />
          </View>
        </View>
        <InfoGeneList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    width: '100%',
    height: '100%',
  },
  homeIcon: {
    backgroundColor: '#024893',
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  refreshIcon: {
    backgroundColor: '#024893',
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default GeneralInformationScreen;
