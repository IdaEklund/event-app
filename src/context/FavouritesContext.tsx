import {
  createContext,
  ReactNode,
  useState,
} from "react";
import type { EventType } from "../types/eventType";

type FavouritesContextType = {
  favourites: EventType[];
  addFavourite: (event: EventType) => void;
  removeFavourite: (id: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

type FavouritesProviderProps = {
  children: ReactNode;
};

export function FavouritesProvider({ children }: FavouritesProviderProps) {
  
  const [favourites, setFavourites] = useState<EventType[]>([]);

  function addFavourite(event: EventType) {
    setFavourites((prev) => {
      const exists = prev.some((e) => e.id === event.id);
      if (exists) return prev;
      return [...prev, event];
    });
  }

  function removeFavourite(id: string) {
    setFavourites((prev) => prev.filter((e) => e.id !== id));
  }


  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
