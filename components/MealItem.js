import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

function MealItem({
  id,
  title,
  imageUrl,
  ingredients,
  steps,
  duration,
  complexity,
  affordability,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    elevation: 4,

    shadowColor: "#0b0b0b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 230,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
  },

  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

/////////////////////////
// import { View, Text, StyleSheet, Image } from "react-native";
// import React from "react";

// function MealItem({
//   title,
//   imageUrl,
//   ingredients,
//   steps,
//   duration,
//   complexity,
//   affordability,
//   isGlutenFree,
//   isVegan,
//   isVegetarian,
//   isLactoseFree,
// }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Image source={{ uri: imageUrl }} style={styles.image} />

//       <Text style={styles.subtitle}>Ingredients:</Text>
//       <Text style={styles.text}>{ingredients}</Text>

//       <Text style={styles.subtitle}>Steps:</Text>
//       <Text style={styles.text}>{steps}</Text>

//       <View style={styles.infoContainer}>
//         <Text style={styles.info}>Duration: {duration} mins</Text>
//         <Text style={styles.info}>Complexity: {complexity}</Text>
//         <Text style={styles.info}>Affordability: {affordability}</Text>
//       </View>

//       <View style={styles.dietContainer}>
//         {isGlutenFree && <Text style={styles.dietText}>Gluten-Free</Text>}
//         {isVegan && <Text style={styles.dietText}>Vegan</Text>}
//         {isVegetarian && <Text style={styles.dietText}>Vegetarian</Text>}
//         {isLactoseFree && <Text style={styles.dietText}>Lactose-Free</Text>}
//       </View>
//     </View>
//   );
// }

// export default MealItem;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   image: {
//     width: "100%", // Full width
//     height: 200, // Adjusted height for a better aspect ratio
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginVertical: 5,
//     color: "#555",
//   },
//   text: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 10,
//   },
//   infoContainer: {
//     marginVertical: 10,
//   },
//   info: {
//     fontSize: 14,
//     color: "#444",
//     marginBottom: 5,
//   },
//   dietContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 10,
//   },
//   dietText: {
//     backgroundColor: "#d4edda",
//     color: "#155724",
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     marginRight: 10,
//     marginBottom: 10,
//     fontSize: 12,
//     fontWeight: "bold",
//   },
// });
