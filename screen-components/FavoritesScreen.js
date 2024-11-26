import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/Favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const { ids, removeFavorite, addFavorite } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => {
    return ids.includes(meal.id);
  });

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You have no favorite meals yet. Add some
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
