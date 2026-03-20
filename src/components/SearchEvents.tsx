import { Dispatch, SetStateAction } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { CityType } from "@/types/cityType";
import { EventType } from "@/types/eventType";
import Btn from "./Btn";


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
        <Text>
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
    backgroundColor: "white",
  },
  searchInput: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3cece",
    width: 120,
    height: 30,
    marginBottom: 10
  },
  searchMessage: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    width: "auto",
    height: 30,
    
  },
});

