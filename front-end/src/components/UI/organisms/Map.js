import { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export function Map({ setCoordinate }) {
  const [pin, setPin] = useState({ latitude: 33.88863, longitude: 35.49548 });
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 33.88863,
          longitude: 35.49548,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={pin}
          draggable={true}
          onDragEnd={(e) => {
            setCoordinate({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.4,
    marginTop: 50,
  },
});
