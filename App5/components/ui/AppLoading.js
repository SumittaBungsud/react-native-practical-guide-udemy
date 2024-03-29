import {StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';

export default function AppLoading() {
  return (
    <View style={styles.container}>
      <LottieView source={require('./loading.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
