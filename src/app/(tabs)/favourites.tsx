import EmptyFavourites from "@/components/EmptyFavourites";
import FavouriteCard from "@/components/FavouriteCard";
import { FavouritesContext } from "@/context/FavouritesContext";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import GradientBackground from "@/components/GradientBackground";

export default function Favourites() {

  const { favourites, setFavourites } = useContext(FavouritesContext);

  function removeFromFavourites(id: string) {
    const favouritesAfterUpdate = favourites.filter((item) => item.id !== id);

    setFavourites(favouritesAfterUpdate);
  }

  return (
    <GradientBackground>
      <View style={styles.container}>
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
      </View>
    </GradientBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 16,
  },
});