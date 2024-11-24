import { View, Text, StyleSheet } from "react-native";
import React from "react";

function MealDeatilScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View style={styles.container}>
      <Text>Meail Detail screen ({mealId}) </Text>
    </View>
  );
}

export default MealDeatilScreen;

const styles = StyleSheet.create({
  container: {},
});
