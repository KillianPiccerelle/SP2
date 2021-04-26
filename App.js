import React, {Component} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, SafeAreaView} from 'react-native';

import {Permission, PERMISSION_TYPE} from './src/AppPermission';
import AppNavigation from './src/navigation';
import store from './src/redux/store';

export default class App extends Component {
  componentDidMount() {
    Permission.requestMultiple([
      PERMISSION_TYPE.access_fine_location,
      PERMISSION_TYPE.write_calendar,
      PERMISSION_TYPE.read_calendar,
      PERMISSION_TYPE.write_external_storage,
    ]);
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          <SafeAreaView style={styles.droidSafeArea}>
            <AppNavigation />
          </SafeAreaView>
        </PaperProvider>
      </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
  },
});
