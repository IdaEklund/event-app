import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { EventType } from "../types/eventType";

type FavouritesContextType = {
  favourites: EventType[];
  setFavourites: Dispatch<SetStateAction<EventType[]>>;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  setFavourites: () => {},
});

type FavouritesProviderProps = {
  children: ReactNode;
};

export function FavouritesProvider({ children }: FavouritesProviderProps) {
  
  const [favourites, setFavourites] = useState<EventType[]>([]);


  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
