import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";


const ProductScreen = () => {
  const products = useSelector(state => state.products.products);
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Detail")}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
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
