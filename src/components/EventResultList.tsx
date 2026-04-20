import { Dispatch, SetStateAction } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { EventType } from "../types/eventType";
import AddToFavouritesBtn from "./AddToFavouritesBtn";
import Item from "./Item";
import { colors } from "@/constants/styles";

type Props = {
  data: EventType[];
  setVisibleCount?: Dispatch<SetStateAction<number>>;
};

export default function EventResultList({ data, setVisibleCount }: Props) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: EventType }) => (
        <View
          style={styles.listContainer}
        >
          <Item item={item}></Item>
          <AddToFavouritesBtn
            item={item}
          ></AddToFavouritesBtn>
        </View>
      )}
      keyExtractor={(item) => String(item.id)}
      onEndReached={() => {
        setVisibleCount?.((prev) => prev + 20);
      }}
      onEndReachedThreshold={0.5}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.primary,
    margin: 8,
    marginLeft: "auto",
    padding: 10,
    borderColor: colors.secondary,
    borderRadius: 8,
    borderWidth: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

