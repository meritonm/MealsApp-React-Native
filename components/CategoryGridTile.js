import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {},
});
