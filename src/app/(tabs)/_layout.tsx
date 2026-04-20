import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/constants/styles";



export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "HittaEvent",
        headerTitleStyle: { fontWeight: "700", fontSize: 30 }, 
        tabBarStyle: { backgroundColor: colors.background, height: 100 },
        headerStyle: { 
          backgroundColor: colors.background, 
          height: 150,
          borderBottomWidth: 0.2,
          borderBottomColor: colors.primary
           },
        headerTintColor: colors.primary, 
        tabBarLabelStyle: { marginTop: 5 },
        
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HittaEvent",
          tabBarActiveTintColor: colors.primary, 
          tabBarInactiveTintColor: colors.secondary,
          tabBarIcon: () => (
            <FontAwesome name="search" size={20} color={colors.secondary}></FontAwesome>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favoriter",
          tabBarActiveTintColor: colors.primary, 
          tabBarInactiveTintColor: colors.secondary,
          tabBarIcon: () => (
            <FontAwesome name="heart" size={20} color={colors.secondary}></FontAwesome>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
