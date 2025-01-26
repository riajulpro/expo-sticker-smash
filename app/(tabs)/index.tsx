import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo Man.</Text>
      <Link href="/about" style={styles.text}>
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    height: "100%",
  },
  text: {
    color: "#fff",
  },
});
