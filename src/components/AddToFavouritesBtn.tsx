import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { FavouritesContext } from "../context/FavouritesContext";
import { EventType } from "../types/eventType";

type Props = {
  item: EventType;
};

export default function AddToFavouritesBtn({ item }: Props) {
  
  const { favourites, setFavourites } = useContext(FavouritesContext);

  function addToFavourites() {
    const favouriteEvent: EventType = {
      id: item.id,
      title: item.title,
      date: item.date,
      time: item.time,
      venue: item.venue,
      address: item.address,
      city: item.city,
    };

    //Om evenemanget redan finns i favoriter läggs det inte till igen.
    if (favourites.some((fav) => fav.id === favouriteEvent.id)) {
      return;
    }

    const updatedFavourites = [...favourites, favouriteEvent];

    setFavourites(updatedFavourites);
    console.log(updatedFavourites);
  }

  return (
    <Pressable
      onPress={() => {
        addToFavourites();
      }}
    >
      <Text>❤️</Text>
    </Pressable>
  );
}
