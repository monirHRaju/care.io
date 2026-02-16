"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";




const SearchQuery = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const pathname = usePathname();

  console.log({router, searchParams, pathname})

  const handleSearchQuery= (e) => {
    e.preventDefault();
    const searchTerm = e.target.search?.value;
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }

    router.push(`${pathname}?${params.toString()}`);
    console.log({'searchTerm': searchTerm, 'params': params})

  }
  return (
    <form onSubmit={handleSearchQuery}>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <input type="input" placeholder="search" name="search" />
          </label>
          <div className="validator-hint hidden">Type something to search.</div>
        </div>
        <button className="btn btn-neutral join-item">Search</button>
      </div>
    </form>
  );
};

export default SearchQuery;