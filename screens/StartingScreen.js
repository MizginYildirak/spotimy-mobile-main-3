import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function StartingScreen({navigation}) {
    const handleStartingScreen = () => {
        navigation.navigate("Home")
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/StartingScreen.png")}
        resizeMode="cover"
        style={styles.img}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handleStartingScreen}
        >
          <Text style={styles.buttonText}>Başlamak İçin Tıkla - buraya ok</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 70,
    width: 300,
    backgroundColor: "#ffcd00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "absolute",
    bottom: 150,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
