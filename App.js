import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screen-components/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screen-components/MealsOverviewScreen";
import MealDeatilScreen from "./screen-components/MealDeatilScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screen-components/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";
import FavoritesContextProvides from "./store/context/Favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#f0f0f0",
        drawerActiveTintColor: "#2a2a2a",
        drawerStyle: { backgroundColor: "#ddd" },
        headerStyle: { backgroundColor: "#e1e1e1" },
        headerTintColor: "#333d",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color="#000" size={18} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            // <IconButton icon="star" color="black" size={18} />
            <Ionicons name="star" color="#000" size={20} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvides>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#1c1a19" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#282524" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDeatilScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvides>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
});
