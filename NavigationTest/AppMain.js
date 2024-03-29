import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTap = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function AppMain() {
  return (
    <NavigationContainer>
      <BottomTap.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
          // drawerActiveTintColor: '#3c0a6b',
          // drawerActiveBackgroundColor: '#f0e1ff',
          // drawerStyle: {backgroundColor: 'white'},
        }}>
        <BottomTap.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
            // drawerLabel: 'Welcome Screen',
            // drawerIcon: ({color, size}) => (
            //   <Icon name="home" size={size} color={color} />
            // ),
          }}
        />
        <BottomTap.Screen
          name="User"
          component={UserScreen}
          options={
            {
              tabBarIcon: ({color, size}) => (
                  <Icon name="person" size={size} color={color} />
                ),
              // drawerIcon: ({color, size}) => (
              //   <Icon name="person" size={size} color={color} />
              // ),
            }
          }
        />
      </BottomTap.Navigator>
    </NavigationContainer>
  );
}
