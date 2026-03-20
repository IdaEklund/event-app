import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "HittaEvent",
        headerTitleStyle: { fontWeight: "700", fontSize: 25 },
        tabBarStyle: { backgroundColor: "black", height: 100 },
        headerStyle: { backgroundColor: "black", height: 150 },
        headerTintColor: "white",
        tabBarLabelStyle: { marginTop: 5 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HittaEvent",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: () => (
            <FontAwesome name="search" size={20} color={"grey"}></FontAwesome>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favoriter",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: () => (
            <FontAwesome name="heart" size={20} color={"grey"}></FontAwesome>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "Om",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: () => (
            <FontAwesome name="info-circle" size={20} color={"grey"}></FontAwesome>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
