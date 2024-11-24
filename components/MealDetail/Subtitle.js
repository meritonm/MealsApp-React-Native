// import { View, Text, StyleSheet } from "react-native";

// function Subtitle({ children }) {
//   return (
//     <View style={styles.subtitleContainer}>
//       <Text style={styles.subtitle}>{children}</Text>
//     </View>
//   );
// }

// export default Subtitle;

// const styles = StyleSheet.create({
//   subtitle: {
//     color: "#cdcdcd",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },

//   subtitleContainer: {
//     padding: 6,
//     borderBottomColor: "#cdcdcd",
//     borderBottomWidth: 2,
//     marginHorizontal: 12,
//     marginVertical: 4,
//   },
// });

import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 16,
    borderBottomColor: "#6c757d",
    borderBottomWidth: 1,
  },
  subtitle: {
    color: "#495057",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
