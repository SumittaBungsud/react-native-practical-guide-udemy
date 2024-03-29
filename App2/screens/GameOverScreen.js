import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Title from '../components/UI/Title';
import PrimaryButton from '../components/UI/PrimaryButton';
import Colors from '../constants/color';

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imagecontainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summarytext}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecontainer: {
    // width: Width < 400 ? 150:300,
    // height: Width < 400 ? 150:300,
    // borderRadius: Width < 400 ? 75:150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summarytext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary500,
  },
});
