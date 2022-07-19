import React, { useEffect, useState } from 'react'

export default function SearchInput({data,clickHandler}) {
    // list of suggestions
    const [suggestions, setSuggestions] = useState([])

    // input search
    const [inputSearch, setInputSearch] = useState('')

    useEffect(()=>{
        handleSearch()
    },[inputSearch])

    const handleSearch = () => {
        let matchs = []
        // if input value is not null
        if (inputSearch.length > 0) {
            // filter list
            matchs = data.filter((item) => {
                // filter item corresponding to search
                const regex = new RegExp(`${inputSearch}`, "gi")
                // return list of matching suggestions
                return item.libelle.match(regex)
            })
        }
        // set the suggestions list
        return setSuggestions(matchs)
    };
  return (
    <>
        <input
              type={"text"}
              placeholder="search"
              name="inputSearch"
              autoComplete="off"
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value)
              }}
        />
        {suggestions.map(
            (suggetion, index) => (
                <div key={index}
                    className="hover:bg-blue-400 hover:text-white hover:cursor-pointer"
                    onClick={() => 
                        {
                            clickHandler(suggetion)
                            setInputSearch("")
                        }
                    }
                >
                    {suggetion.libelle}
                </div>
                )
            )
        }
    </>
  )
}
