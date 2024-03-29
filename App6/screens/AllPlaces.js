import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import PlacesList from '../components/Places/PlacesList';
import {fetchPlaces} from '../util/database';

export default function AllPlaces({route}) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const IsFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places)
    }

    if (IsFocused) {
      loadPlaces();
      // setLoadedPlaces(curlPlaces => [...curlPlaces, route.params.place]);
    }
  }, [IsFocused]);

  return <PlacesList places={loadedPlaces} />;
}

const styles = StyleSheet.create({});
