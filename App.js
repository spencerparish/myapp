import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import image from "./palmtree.png";
import image2 from "./Surferdude.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Take it Easy.</Text>
      <View style={styles.container}>
        <View style={styles.login}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "top",
  },
  login: {
    backgroundColor: "pink",
    height: 5 * (deviceHeight / 7),
  },
  title: {
    color: "#f4e8ed",
    fontSize: 60,
  },
});
