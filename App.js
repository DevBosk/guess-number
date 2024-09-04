import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgorundImage}
      >
        {/* <SafeAreaView styles={styles.rootScreen}>{screen}</SafeAreaView> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgorundImage: {
    opacity: 0.15,
  },
});
