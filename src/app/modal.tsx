import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { FavouritesContext } from "@/context/FavouritesContext";
import { EventType } from "@/types/eventType";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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

  //Kontrollerar om eventet finns i favoriter.
  const isFavourite = favourites.some((fav) => fav.id === id);

  function toggleFavourite() {
    const favouriteEvent: EventType = {
      id,
      title,
      date,
      time,
      venue,
      address,
      city,
    };

    //Om hjärtat är ifyllt (eventet finns i favoriter) kan man klicka på det
    //för att ta bort eventet från favoriter.
    if (isFavourite) {
      setFavourites(favourites.filter(event => event.id !== id));
    }
      else {
        setFavourites([...favourites, favouriteEvent]);
      }
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
          marginBottom: 30,
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
          marginTop: 40,
        }}
        onPress={toggleFavourite}
      >
        <MaterialCommunityIcons
          name={isFavourite ? "heart" : "heart-outline"}
          size={24}
          color="black"
        />
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

