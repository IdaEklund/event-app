import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import { Pressable} from "react-native";
import { FavouritesContext } from "../context/FavouritesContext";
import { EventType } from "../types/eventType";


type Props = {
  item: EventType;
};


export default function AddToFavouritesBtn({ item }: Props) {

  const { favourites, setFavourites } = useContext(FavouritesContext);

  //isFavourite är sann om eventet redan finns i favoriter
  const isFavourite = favourites.some((fav) => fav.id === item.id);

  function toggleFavourite() {

    //Om hjärtat är ifyllt (eventet finns i favoriter) kan man klicka på det
    //för att ta bort eventet från favoriter.
    if (isFavourite) {
      setFavourites(favourites.filter(event => event.id !== item.id));
    }
      else {
        setFavourites([...favourites, item]);
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
