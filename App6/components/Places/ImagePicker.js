import {
  StyleSheet,
  View,
  Image,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {useState} from 'react';

import {launchCamera} from 'react-native-image-picker';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

export default function ImagePicker({onTakeImage}) {
  const check = PermissionsAndroid.check('android.permission.CAMERA');
  const [cameraPermissionInformation, requestPermission] = useState(check);

  const [pickedImage, setPickedImage] = useState();

  async function verifyPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
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

  async function takeImageHandler() {
    await verifyPermissions();

    if (cameraPermissionInformation != PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }

    const image = await launchCamera({
      allowsEditing: true,
      quality: 0.5,
    });

    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
    // console.log(image.assets[0].uri)
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
