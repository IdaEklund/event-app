import EmptyFavourites from "@/components/EmptyFavourites";
import FavouriteCard from "@/components/FavouriteCard";
import { FavouritesContext } from "@/context/FavouritesContext";
import { useContext } from "react";
import { ScrollView } from "react-native";

export default function Favourites() {

  const { favourites, setFavourites } = useContext(FavouritesContext);

  function removeFromFavourites(id: string) {
    const favouritesAfterUpdate = favourites.filter((item) => item.id !== id);

    setFavourites(favouritesAfterUpdate);
  }

  return (
    <>
      {favourites.length === 0 && <EmptyFavourites></EmptyFavourites>}
      <ScrollView>
        {favourites.map((favourite) => (
          <FavouriteCard
            id={favourite.id}
            key={favourite.id}
            title={favourite.title}
            venue={favourite.venue}
            date={favourite.date}
            time={favourite.time}
            address={favourite.address}
            city={favourite.city}
            removeFromFavourites={removeFromFavourites}
          ></FavouriteCard>
        ))}
      </ScrollView>
    </>
  );
}
