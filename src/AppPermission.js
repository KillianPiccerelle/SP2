import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

const PLATFORM_ACCESS_FINE_LOCATION_PERMISSIONS = {
  ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
};

const PLATFORM_WRITE_CALENDAR_PERMISSIONS = {
  ios: PERMISSIONS.IOS.CALENDARS,
  android: PERMISSIONS.ANDROID.WRITE_CALENDAR,
};

const PLATFORM_READ_CALENDAR_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.READ_CALENDAR,
};

const PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MEDIA_LIBRARY, //a regarder pas sûr d'être celà & compléter le info.plist & podfile en conséquence
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const REQUEST_PERMISSION_TYPE = {
  access_fine_location: PLATFORM_ACCESS_FINE_LOCATION_PERMISSIONS,
  write_calendar: PLATFORM_WRITE_CALENDAR_PERMISSIONS,
  read_calendar: PLATFORM_READ_CALENDAR_PERMISSIONS,
  write_external_storage: PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSIONS,
};

const PERMISSION_TYPE = {
  access_fine_location: 'access_fine_location',
  write_calendar: 'write_calendar',
  read_calendar: 'read_calendar',
  write_external_storage: 'write_external_storage',
};

class AppPermission {
  checkPermission = async (type): Promise<boolean> => {
    console.log('AppPermission checkPermission type:', type);
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log('AppPermission checkPermission permissions:', permissions);
    if (!permissions) {
      return true;
    }
    try {
      const result = await check(permissions);
      console.log('AppPermission checkPermission result:', result);
      if (result === RESULTS.GRANTED) return true;
      return this.requestPermission(permissions);
    } catch (error) {
      console.log('AppPermission checkPermission error:', error);
      return false;
    }
  };

  requestPermission = async (permissions): Promise<boolean> => {
    console.log('AppPermission requestPermission permissions:', permissions);
    try {
      const result = await request(permissions);
      console.log('AppPermission requestPermission result:', result);
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.log('AppPermission requestPermission error:', error);
      return false;
    }
  };

  requestMultiple = async (types): Promise<boolean> => {
    console.log('AppPermission requestMultiple types:', types);
    const results = [];
    for (const type of types) {
      const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS];
      if (permission) {
        const result = await this.requestPermission(permission);
        results.push(result);
      }
    }
    for (const result of results) {
      if (!result) {
        return false;
      }
    }
    return true;
  };
}

const Permission = new AppPermission();
export {Permission, PERMISSION_TYPE};
