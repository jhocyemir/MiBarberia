import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/splash2.jpg")}
        style={{
          width: "100%",
          height: "100%"
        }}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
