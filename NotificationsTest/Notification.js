import {useEffect} from 'react';
import {StyleSheet, Button, View, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  requestPermissions: Platform.OS === 'ios',
});

export default function Notification() {
  useEffect(() => {
    function createChannels() {
      PushNotification.createChannel({
        channelId: 'Test-123',
        channelName: 'Test Channel',
      });
    }

    createChannels();
  }, []);

  function localNotificationHandler() {
    PushNotification.localNotification({
      channelId: 'Test-123',
      title: 'You clicked on BUTTON',
      message: 'Hello World!',
      actions: ["Yes", "No"],
      picture: "https://cdn.dribbble.com/users/1091150/screenshots/13916179/media/9acdd22212d2eb4a12bd2efa300bb839.jpg?compress=1&resize=1000x750&vertical=top",
      userInfo: {},
    });
  }

  function scheduleNotificationHandler() {
    PushNotification.localNotificationSchedule({
      channelId: 'Test-123',
      title: 'Alarm! You clicked on BUTTON',
      message: 'Hello World!',
      date: new Date(Date.now() + 3 * 1000),
      actions: ["Yes", "No"],
      repeatTime: 1,
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Local Notification" onPress={localNotificationHandler} />
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
