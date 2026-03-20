import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { FavouritesContext } from "@/context/FavouritesContext";
import { EventType } from "@/types/eventType";


export default function Modal() {
  const router = useRouter();

  const { id, title, date, time, venue, address, city } = useLocalSearchParams<{
    id: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    city: string;
  }>();

  const { favourites, setFavourites } = useContext(FavouritesContext);

  function addToFavourites() {
   

    const favouriteEvent: EventType = {
      id,
      title,
      date,
      time,
      venue,
      address,
      city,
    };

    //Man kan ej lägga till en favorit 2 ggr.
    if (favourites.some((item) => item.id)) {
      return;
    }

    const updatedFavourites = [...favourites, favouriteEvent];

    setFavourites(updatedFavourites);
    console.log(updatedFavourites);
  }

  return (
    <View style={styles.modal}>
      <Pressable
        style={{
          backgroundColor: "white",
          width: 100,
          height: 40,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 30
        }}
        onPress={() => router.back()}
      >
        <Text>Stäng ner</Text>
      </Pressable>
      <View style={styles.modalContent}>
      <Text>{title}</Text>
      <Text>{venue}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>{address}</Text>
      <Text>{city}</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          width: 100,
          height: 40,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40
        }}
        onPress={() => {
          addToFavourites();
        }}
      >
        <Text>Spara</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    height: "100%",
    borderRadius: 4,
  },
  modalContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

