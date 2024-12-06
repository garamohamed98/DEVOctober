import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
