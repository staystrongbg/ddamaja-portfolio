"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePostContext } from "../context/postContext";
import { postsApi } from "@/app/lib/api";

export default function Search() {
  const { setSearchResults, searchResults } = usePostContext();
  const [term, setTerm] = useState("");

  const handleSearch = useCallback(
    async (searchTerm: string) => {
      try {
        const results = await postsApi.getPostBySearch(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching posts:", error);
        setSearchResults([]);
      }
    },
    [searchResults]
  );

  useEffect(() => {
    handleSearch(term);
  }, [term]);

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center relative flex-col">
      <input
        ref={searchRef}
        type="text"
        id="search"
        placeholder="Search"
        className="px-4 py-2  border-b border-purple-200   focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-700 dark:text-fuchsia-400 min-w-[180px]"
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}
