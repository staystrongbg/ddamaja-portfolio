'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Post } from '../@types';

type PostContextType = {
  searchResults: null | Post[];
  setSearchResults: Dispatch<SetStateAction<Post[] | null>>;
};

export const PostContext = createContext<PostContextType>({
  searchResults: null,
  setSearchResults: () => {},
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Post[] | null>(null);

  return (
    <PostContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
