import { View, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route }) {
  // const route = useRoute();
  const catId = route.params.categoryId;
  if (!catId) {
    console.error("categoryId is undefined");
  }

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // function renderMealItem({ itemData }) {
  //   return <MealItem title={itemData.item.title} />;
  // }

  function renderMealItem({ item }) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        ingredients={item.ingredients}
        steps={item.steps}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        isGlutenFree={item.isGlutenFree}
        isVegan={item.isVegan}
        isVegetarian={item.isVegetarian}
        isLactoseFree={item.isLactoseFree}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
