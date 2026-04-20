import { Pressable, Text, View, StyleSheet } from "react-native";
import {colors} from "@/constants/styles"; 

type Props = {
  title: string;
  venue: string;
  date: string;
  time: string;
  address: string;
  city: string;
  id: string;
  removeFromFavourites: (id: string) => void;
};

export default function FavouriteCard({
  title,
  venue,
  date,
  time,
  address,
  city,
  id,
  removeFromFavourites,
}: Props) {
  return (
    <View
      style={styles.cardContainer}
    >
      <Text style={styles.titleText}>{title}</Text>
      {venue && <Text style={styles.bodyText}>{venue}</Text>}
      <Text style={styles.bodyText}>{date}{", "}{time}</Text>
      <Text style={styles.bodyText}>{address}</Text>
      <Text style={styles.italicText}>{city}</Text>
      <Pressable
        onPress={() => {
          removeFromFavourites(id);
        }}
      >
        <Text style={styles.removeText}>
          Ta bort från favoriter
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    margin: 3,
    marginBottom: 8,
    padding: 10,
    borderColor: colors.secondary,
    borderRadius: 8,
    borderWidth: 3,
    gap: 5,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 14,
  },
  bodyText: {
    fontSize: 16,
  },
  italicText: {
    fontWeight: "500",
    fontSize: 16,
    fontStyle: "italic",
  },
  removeText: {
    fontWeight: "800", 
    marginTop: 20,
    fontSize: 16
  }
});
