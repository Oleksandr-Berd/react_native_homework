import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Maps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  justifyContent: "center",
  alignItems: "center",
});

export default MapsScreen;
