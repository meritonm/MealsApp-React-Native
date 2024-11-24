import { View, StyleSheet, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute();

  const catId = route.params.categoryId;
  if (!catId) {
    console.error("categoryId is undefined");
  }

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // function renderMealItem({ itemData }) {
  //   return <MealItem title={itemData.item.title} />;
  // }

  // function renderMealItem({ item }) {
  //   return (
  //     <MealItem
  //       id={id.item}
  //       title={item.title}
  //       imageUrl={item.imageUrl}
  //       ingredients={item.ingredients}
  //       steps={item.steps}
  //       duration={item.duration}
  //       complexity={item.complexity}
  //       affordability={item.affordability}
  //       isGlutenFree={item.isGlutenFree}
  //       isVegan={item.isVegan}
  //       isVegetarian={item.isVegetarian}
  //       isLactoseFree={item.isLactoseFree}
  //     />
  //   );
  // }

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      affordability: item.affordability,
      isGlutenFree: item.isGlutenFree,
      isVegan: item.isVegan,
      isVegetarian: item.isVegetarian,
      isLactoseFree: item.isLactoseFree,
    };

    return <MealItem {...mealItemProps} />;
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
