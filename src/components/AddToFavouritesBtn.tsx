import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import { Pressable} from "react-native";
import { FavouritesContext } from "../context/FavouritesContext";
import type { EventType } from "../types/eventType";


type Props = {
  item: EventType;
};


export default function AddToFavouritesBtn({ item }: Props) {

  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);

  //isFavourite är sann om eventet redan finns i favoriter
  const isFavourite = favourites.some((fav) => fav.id === item.id);

  function toggleFavourite() {
    if (isFavourite) {
      removeFavourite(item.id);
    } else {
      addFavourite(item);
    }
  }


  return (
    <Pressable
      onPress={toggleFavourite}
    >
      <MaterialCommunityIcons
        name={isFavourite ? "heart" : "heart-outline"}
        size={30}
        color="black"
      />
    </Pressable>
  );
}
