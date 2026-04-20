import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FavouritesContext } from "@/context/FavouritesContext";
import { EventType } from "@/types/eventType";
import Btn from "@/components/Btn";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/constants/styles";

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
      <View style={styles.modalContent}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.italicText}>///////////////////</Text>
        <Text style={styles.italicText}>//Plats för bild//</Text>
        <Text style={styles.italicText}>//////////////////</Text>
        {venue && (
          <Text style={styles.venueText}>
            {venue}
          </Text>
        )}
        <Text style={styles.bodyText}>
          {date}
          {", "}
          {time}
        </Text>
        <Text style={styles.bodyText}>{address}</Text>
        <Text style={styles.italicText}>{city}</Text>
        <Text
          style={styles.ticketText}
        >
          //Plats för biljettlänk//
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Btn onPress={() => router.back()}>
          <Text>Stäng ner</Text>
        </Btn>
        <Btn onPress={toggleFavourite}>
          <MaterialCommunityIcons
            name={isFavourite ? "heart" : "heart-outline"}
            size={24}
            color="black"
          />
        </Btn>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  modal: {
    width: "80%",
    margin: "auto",
    marginBottom: 80,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    opacity: 0.95,
    height: "80%",
    borderRadius: 30,
    borderColor: colors.secondary,
    borderWidth: 3,
  },
  modalContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 26,
    marginBottom: 20,
    textAlign: "center",
  },
  italicText: {
    fontWeight: "500",
    fontSize: 16,
    fontStyle: "italic",
  },
  venueText: {
    fontSize: 16,
    fontWeight: "500",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "500",
  },
  ticketText: {
    fontWeight: "500",
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 30,
  },
  btnContainer: {
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
});

