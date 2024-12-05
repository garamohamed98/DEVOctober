import { FlatList, Image, StyleSheet, View } from "react-native";
import products from "../data/products";

const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
      key={2}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
