import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchBeer(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the values from the URL query strings
  const beer = searchParams.get("beer");

  const [query, setQuery] = useEffect(() => {
    console.log("place", place);
  }, []);

  return (
    <div>
      <h2>Query String Example</h2>
      <p>Open the console to see the logged query string values</p>
    </div>
  );
}

export default SearchBeer;
