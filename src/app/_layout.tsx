import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FavouritesProvider } from "../context/FavouritesContext";



export default function RootLayout() {

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <FavouritesProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false}}
          ></Stack.Screen>
          <Stack.Screen
            name="modal"
            options={{
              headerShown: false,
              presentation: "transparentModal",
              contentStyle: {
                marginTop: 100,
                marginBottom: 100,
              },
            }}
          ></Stack.Screen>
        </Stack>
      </FavouritesProvider>
    </>
  );
}
