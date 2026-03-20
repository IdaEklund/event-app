import { Pressable, Text, View } from "react-native";

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
      style={{
        backgroundColor: "white",
        margin: 8,
        padding: 10,
        borderColor: "black",
        borderRadius: 8,
        borderWidth: 3,
      }}
    >
      <Text>{title}</Text>
      <Text>{venue}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>{address}</Text>
      <Text>{city}</Text>
      <Pressable
        onPress={() => {
          removeFromFavourites(id);
        }}
      >
        <Text style={{ fontWeight: "600", marginTop: 20 }}>
          Ta bort från favoriter
        </Text>
      </Pressable>
    </View>
  );
}
