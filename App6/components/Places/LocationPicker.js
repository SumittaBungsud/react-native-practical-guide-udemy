import {View, StyleSheet, Text, Image, PermissionsAndroid} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

import GetLocation from 'react-native-get-location';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';
import {getAddress, getMapPreview} from '../../util/location';

function LocationPicker({onPickLocation}) {
  const [pickedLocation, setPickedLocation] = useState();
  const IsFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (IsFocused && route.params) {
      const mapPickedLocation = route.params && {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };

      setPickedLocation(mapPickedLocation);
    }
  }, [route, IsFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng,
        );
        onPickLocation({...pickedLocation, address: address});
      }
    }
    handleLocation();
  }, [pickedLocation, onPickLocation]);

  const check = PermissionsAndroid.check(
    'android.permission.ACCESS_FINE_LOCATION',
  );
  const [locationPermissionInformation, requestPermission] = useState(check);

  async function verifyPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Me Later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        requestPermission(granted);
        //console.log('Permission!', granted);
      } else {
        console.log('Permission!', granted);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function getLocationHandler() {
    await verifyPermissions();

    if (locationPermissionInformation != PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }

    const location = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 3000,
    });

    setPickedLocation({
      lat: location.latitude,
      lng: location.longitude,
    });
    // console.log(JSON.stringify(location, null, 4));
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
