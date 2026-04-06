import { Dispatch, SetStateAction } from "react";
import { FlatList, View } from "react-native";
import { EventType } from "../types/eventType";
import AddToFavouritesBtn from "./AddToFavouritesBtn";
import Item from "./Item";

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
          style={{
            backgroundColor: "lightgrey",
            margin: 8,
            padding: 4,
            borderColor: "black",
            borderRadius: 8,
            borderWidth: 3,
          }}
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


