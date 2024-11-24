// import { View, Text, StyleSheet } from "react-native";
// import React from "react";

// function List({ data }) {
//   return data.map((dataPoint) => (
//     <View style={styles.container} key={dataPoint}>
//       <Text style={styles.itemText}>{dataPoint}</Text>
//     </View>
//   ));
// }

// export default List;

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 6,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     marginVertical: 4,
//     marginHorizontal: 12,

//     backgroundColor: "#cdcdcd",
//   },

//   itemText: {
//     color: "#282524",
//     textAlign: "center",
//   },
// });

import { View, Text, StyleSheet } from "react-native";
import React from "react";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.container} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#e9ecef",
  },
  itemText: {
    color: "#212529",
    fontSize: 14,
    textAlign: "center",
  },
});
