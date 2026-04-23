import { Picker } from "@react-native-picker/picker";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import type { CityType } from "@/types/cityType";
import Btn from "./Btn";
import { colors } from "@/constants/styles";


type Props = {
  showPicker: boolean;
  setShowPicker: Dispatch<SetStateAction<boolean>>;
  setShowSearchInput: Dispatch<SetStateAction<boolean>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  selectedCity: CityType;
  setSelectedCity: Dispatch<SetStateAction<CityType>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setCityIsSelected: Dispatch<SetStateAction<boolean>>;
  mainCities: CityType[];
};

export default function CityPicker({
  showPicker,
  setShowPicker,
  setShowSearchInput,
  setSearchKeyword,
  selectedCity,
  setSelectedCity,
  setIsLoading,
  setCityIsSelected,
  mainCities,
}: Props) {
  return (
    <>
      <Btn
        onPress={() => {
          setShowPicker(true);
          setShowSearchInput(false);
          setSearchKeyword("");
        }}
      >
        Välj stad
      </Btn>

      {showPicker && (
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={String(selectedCity.id)}
            //mainCities-listan gås igenom och letar efter den stads
            //id som matchar staden som valts i Pickern. Hela city-objektet
            //returneras.
            onValueChange={(itemValue) => {
              const id = Number(itemValue);

              const selected = mainCities.find(
                (city) => String(city.id) === String(id),
              );

              if (!selected) return;

              setSelectedCity(selected);

              setIsLoading(true);
              setCityIsSelected(true);
            }}
            itemStyle={{ height: 40, backgroundColor: colors.surface }}
          >
            {mainCities.map((city) => (
              <Picker.Item
                key={city.id}
                label={city.title}
                value={String(city.id)}
              />
            ))}
          </Picker>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.surface,
    color: colors.primary,
    width: 200,
  },
  picker: {
    backgroundColor: colors.surface,
    width: "100%",
    borderRadius: 20,
    marginBottom: 5,
  }
});
