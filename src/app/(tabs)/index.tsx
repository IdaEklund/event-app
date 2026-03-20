import fetchEvents from "@/api/fetchEvents";

import fetchSearch from "@/api/fetchSearch";
import CityPicker from "@/components/CityPicker";
import ErrorMessage from "@/components/ErrorMessage";
import EventResultList from "@/components/EventResultList";
import Loader from "@/components/Loader";
import SearchEvents from "@/components/SearchEvents";
import { mainCities } from "@/data/cities";
import { CityType } from "@/types/cityType";
import { EventType } from "@/types/eventType";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const [fetchedEvents, setFetchedEvents] = useState<EventType[]>([]);
  const [cityIsSelected, setCityIsSelected] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  const [showSearchedList, setShowSearchedList] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20); 
  const [isError, setIsError] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchedData, setSearchedData] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

const [selectedCity, setSelectedCity] = useState<CityType>(mainCities[0]);

  const currentCity = selectedCity;


  //useEffecten körs när "cityIsSelected" är sann.
  useEffect(() => {
    if (cityIsSelected) {
      //Asynk-funktion som hämtar events
      fetchEvents({
        currentCity,
        setFetchedEvents,
        setShowCityList,
        setShowSearchedList,
        setCityIsSelected,
        setIsError,
        setIsLoading,
      });
    }
  }, [cityIsSelected, currentCity]);

  //Körs när man skriver nåt i sökrutan
  useEffect(() => {
    const timeout = setTimeout(() => {
      
      if (searchKeyword.trim() !== "") {
        fetchSearch({
          searchKeyword,
          setSearchedData,
          setIsLoading,
          setShowSearchedList,
          setShowCityList,
          setIsError
        });
      } else {
        setSearchedData([]);
        setIsLoading(false);
      }
    }, 400); 

    return () => clearTimeout(timeout); //rensar timeout om användaren skriver mer
  }, [searchKeyword]);

 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {isError && <ErrorMessage setIsError={setIsError}></ErrorMessage>}

        {/*VÄLJ STAD*/}
        <View style={styles.choicesContainer}>
          <CityPicker
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowSearchInput={setShowSearchInput}
            setSearchKeyword={setSearchKeyword}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            setIsLoading={setIsLoading}
            setCityIsSelected={setCityIsSelected}
            mainCities={mainCities}
          ></CityPicker>

          {/*SÖK EVENEMANG*/}
          <SearchEvents
            setShowSearchInput={setShowSearchInput}
            showCityList={showCityList}
            setShowCityList={setShowCityList}
            setShowPicker={setShowPicker}
            searchKeyword={searchKeyword}
            showSearchInput={showSearchInput}
            setIsLoading={setIsLoading}
            setSearchKeyword={setSearchKeyword}
            setCityIsSelected={setCityIsSelected}
            searchedData={searchedData}
            currentCity={currentCity}
          ></SearchEvents>
        </View>

        {isLoading && <Loader></Loader>}

        {showSearchedList && (
          <View style={styles.listContainer}>
            <EventResultList
              data={searchedData.slice(0, visibleCount)}
              setVisibleCount={setVisibleCount}
            ></EventResultList>
          </View>
        )}

        {showCityList && (
          <View style={styles.listContainer}>
            <EventResultList
              data={fetchedEvents.slice(0, visibleCount)}
            ></EventResultList>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  choicesContainer: {
    
    padding: 2,
    marginBottom: 70,
    height: 200,
    backgroundColor: "white",
   flexDirection: "column"
  },
  picker: {
    backgroundColor: "grey",
    width: 250,

    fontSize: 10,
    marginTop: 5,
  },
  pickerItem: {
    fontSize: 10,
    
  },
  listContainer: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    width: 300,
    height: 50,
    flexDirection: "column",
    gap: 5,
    margin: 5,
    backgroundColor: "#2b4c33",
  },
  cardText: {
    fontSize: 20,
  },
  itemContainer: {
    backgroundColor: "grey",
    margin: 5,
  },
  item: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "column",
  },
});
