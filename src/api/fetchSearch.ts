import { Dispatch, SetStateAction } from "react";
import { ApiType } from "@/types/apiType";
import { EventType } from "@/types/eventType";

type Props = {
  searchKeyword: string;
  setSearchedData: Dispatch<SetStateAction<EventType[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setShowSearchedList: Dispatch<SetStateAction<boolean>>;
  setShowCityList: Dispatch<SetStateAction<boolean>>;
};

export default async function fetchSearch({
  searchKeyword,
  setSearchedData,
  setIsLoading,
  setIsError,
  setShowSearchedList,
  setShowCityList,
}: Props) {
  
  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/suggest?apikey=RaCHg3GxkbyHNQO2aeYSbBJTsioBCeEr&keyword=${searchKeyword}&countryCode=SE`,
    );

    const data = (await res.json()) as { _embedded?: { events?: ApiType[] } };

    const eventsFromApi = data._embedded?.events ?? [];

    //Mappar API-data till EventType
    const mappedEvents: EventType[] = eventsFromApi.map((e) => ({
      id: e.id,
      title: e.name,
      date: e.dates?.start?.localDate ?? "",
      time: e.dates?.start?.localTime ?? "",
      venue: e._embedded?.venues?.[0]?.name ?? "",
      address: e._embedded?.venues?.[0]?.address?.line1 ?? "",
      city: e._embedded?.venues?.[0]?.city?.name ?? "",
    }));

    setSearchedData(mappedEvents);
    setShowCityList(false);
    setIsLoading(false);
    setShowSearchedList(true);
    
  } catch (e) {
    console.log(e);
     setIsError(true);
  }
}
