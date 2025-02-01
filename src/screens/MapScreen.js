import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const GOOGLE_API_KEY = "AIzaSyAvJDWtM_VcydTMMfufgfpNwyOQDuF-_gc";

// Function to fetch coordinates for a given city
const searchCity = async (city, GOOGLE_API_KEY, setRegion) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    console.log("data", data);

    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      setRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      Alert.alert(
        "City not found",
        "Please check the city name and try again."
      );
    }
  } catch (error) {
    Alert.alert("Error", "Unable to fetch city coordinates. Please try again.");
    console.error(error);
  }
};

const MapScreen = ({ navigation, route }) => {
  const params = route?.params;
  const { city } = params;
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 48.9226,
    longitude: 24.7097,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      if (city) {
        await searchCity(city, GOOGLE_API_KEY, setRegion);
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {!!location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            description="Current Position"
          />
        )}
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="City Location"
          description={`Coordinates of ${city}`}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
