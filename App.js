import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [alignItems, setAlignItems] = useState("flex-start");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.allBoxes, { alignItems: alignItems }]}>
          <View style={[styles.box, { backgroundColor: "orangered" }]} />
          <View style={[styles.box, { backgroundColor: "orange" }]} />
          <View style={[styles.box, { backgroundColor: "mediumseagreen" }]} />
          <View style={[styles.box, { backgroundColor: "deepskyblue" }]} />
          <View style={[styles.box, { backgroundColor: "mediumturquoise" }]} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10
          }}
        >
          <Button title="flex-end" onPress={() => setAlignItems("flex-end")} />
          <Button title="center" onPress={() => setAlignItems("center")} />
          <Button title="baseline" onPress={() => setAlignItems("baseline")} />
          <Button title="strech" onPress={() => setAlignItems("stretch")} />
          <Button
            title="flex-start"
            onPress={() => setAlignItems("flex-start")}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Button({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flex: 1
  },
  allBoxes: {
    flex: 0.6,
    backgroundColor: "#defcaa",
    flexDirection: "column"
  },
  button: {
    backgroundColor: "#2fa9c8",
    width: 70,
    height: 40,
    padding: 2,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  box: {
    width: "auto",
    minWidth: 50,
    height: 80
  },
  label: {
    color: "white",
    fontSize: 14
  }
});
