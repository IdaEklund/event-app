import { Dispatch, SetStateAction } from "react";
import { ApiType } from "@/types/apiType";
import { CityType } from "@/types/cityType";
import { EventType } from "@/types/eventType";

type Props = {
  currentCity: CityType;
  setFetchedEvents: Dispatch<SetStateAction<EventType[]>>;
  setShowCityList: Dispatch<SetStateAction<boolean>>;
  setShowSearchedList: Dispatch<SetStateAction<boolean>>;
  setCityIsSelected: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default async function fetchEvents({
  currentCity,
  setFetchedEvents,
  setShowCityList,
  setShowSearchedList,
  setCityIsSelected,
  setIsError,
  setIsLoading,
}: Props) {


  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=RaCHg3GxkbyHNQO2aeYSbBJTsioBCeEr&latlong=${currentCity.lat},${currentCity.lon}&radius=70&unit=km&size=200`,
    );
    const data = await res.json();

    const eventsFromApi = data._embedded?.events ?? [];

    //Mappar API-data till EventType
    const mappedEvents: EventType[] = (eventsFromApi as ApiType[]).map((e) => ({
      id: e.id,
      title: e.name,
      date: e.dates?.start?.localDate ?? "",
      time: e.dates?.start?.localTime?.slice(0, 5) ?? "",
      venue: e._embedded?.venues?.[0]?.name ?? "",
      address: e._embedded?.venues?.[0]?.address?.line1 ?? "",
      city: e._embedded?.venues?.[0]?.city?.name ?? "",
    }));

    
    setFetchedEvents(mappedEvents);
    setShowSearchedList(false);
    setShowCityList(true);
    setCityIsSelected(false);
    
  } catch (e) {
    setIsError(true);
    console.log(e);
  } finally {
    setIsLoading(false);
  }
}
