// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import React from "react";
// import { MEALS } from "../data/dummy-data";
// import MealDetail from "../components/MealDetail";
// import Subtitle from "../components/MealDetail/Subtitle";
// import List from "../components/MealDetail/List";

// function MealDeatilScreen({ route }) {
//   const mealId = route.params.mealId;

//   const selectedMeal = MEALS.find((meal) => meal.id === mealId);

//   return (
//     <ScrollView style={styles.container}>
//       <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
//       <Text style={styles.title}>{selectedMeal.title}</Text>
//       <MealDetail
//         duration={selectedMeal.duration}
//         complexity={selectedMeal.complexity}
//         affordability={selectedMeal.affordability}
//         textStyle={styles.detailText}
//       />
//       <View style={styles.listOuterContainer}>
//         <View style={styles.listContainer}>
//           <Subtitle>Ingredients</Subtitle>
//           <List data={selectedMeal.ingredients} />
//           <Subtitle>Steps</Subtitle>
//           <List data={selectedMeal.steps} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// export default MealDeatilScreen;

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 32,
//   },

//   image: {
//     width: "100%",
//     height: 250,
//   },

//   title: {
//     fontWeight: "bold",
//     fontSize: 24,
//     margin: 10,
//     textAlign: "center",
//     color: "white",
//   },
//   detailText: {
//     color: "white",
//   },
//   listOuterContainer: {
//     alignItems: "center",
//   },
//   listContainer: {
//     width: "80%",
//   },
// });

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/Favorites-context";

function MealDeatilScreen({ route, navigation }) {
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = ids.includes(mealId);

  function changeFavoriteStatusHandler() {
  
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [changeFavoriteStatusHandler, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDeatilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    marginVertical: 16,
    textAlign: "center",
    color: "#212529",
  },
  detailText: {
    color: "#495057",
    fontSize: 16,
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 40,
  },
  listContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
});
