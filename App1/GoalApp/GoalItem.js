import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalitem}>
      <Pressable
        android_ripple={{color: '#2c0462'}}
        onPress={props.onDeleteItem.bind(this, props.item.id)}
        style={({pressed}) => pressed ? styles.presseditem:null}>
        <Text style={{color: '#fff', padding: 8,}}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  presseditem: {
    opacity: 0.5,
  },
});
