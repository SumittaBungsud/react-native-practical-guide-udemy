import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from './screens/Map';
import IconButton from './components/UI/IconButton';
import AppLoading from './components/UI/AppLoading';
import PlaceDetails from './screens/PlaceDetails';
import {Colors} from './constants/colors';
import {init} from './util/database';

const Stack = createNativeStackNavigator();

export default function Devices_Maps_Cam() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({navigation}) => ({
            headerRight: ({tintColor}) => (
              <IconButton
                icon="add"
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: 'Add a new Place',
          }}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{title: 'Loading Place...',}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}