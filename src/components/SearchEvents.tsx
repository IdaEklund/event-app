import { Dispatch, SetStateAction } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import type { CityType } from "@/types/cityType";
import type { EventType } from "@/types/eventType";
import Btn from "./Btn";
import { colors } from "@/constants/styles";


type Props = {
  setShowSearchInput: Dispatch<SetStateAction<boolean>>;
  showCityList: boolean;
  setShowCityList: Dispatch<SetStateAction<boolean>>;
  setShowPicker: Dispatch<SetStateAction<boolean>>;
  searchKeyword: string;
  showSearchInput: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  setCityIsSelected: Dispatch<SetStateAction<boolean>>;
  searchedData: EventType[];
  currentCity: CityType;
};

export default function SearchEvents({
  setShowSearchInput,
  showCityList,
  setShowCityList,
  setShowPicker,
  searchKeyword,
  showSearchInput,
  setIsLoading,
  setSearchKeyword,
  setCityIsSelected,
  searchedData,
  currentCity,
}: Props) {
  return (
    <View style={styles.container}>
      <Btn
        onPress={() => {
          setShowSearchInput(true);
          setShowCityList(false);
          setShowPicker(false);
        }}
      >
        Sök
      </Btn>
      
     
      {showSearchInput && (
        <>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => {
            setIsLoading(true);
            setSearchKeyword(text);
            setCityIsSelected(false);
          }}
          value={searchKeyword}
        ></TextInput>
        </>
      )}

      
      {searchedData?.length === 0 && searchKeyword?.length > 1 && (
        <Text style={styles.searchMessage}>Inga evenemang matchar ditt sökord</Text>
      )}

      {showCityList && (
        <Text style={styles.whichCityText}>
          Visar resultat för:{" "}
          {currentCity ? currentCity.title : "Ingen stad vald"}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    padding: 10,
    fontSize: 16,
    width: 200,
    height: 40,
    marginBottom: 10,
    borderRadius: 20,
  },
  searchMessage: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.error,
    fontSize: 15,
    width: "auto",
    height: 30,
    marginTop: 20,
  },
  whichCityText: {
    color: colors.secondary
  },
});

