import {StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.buttoncontainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttoncontainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
