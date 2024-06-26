import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${searchUrl}${searchTerm}`);
      const { drinks } = response.data;

      return drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";

    // const response = await axios.get(`${searchUrl}${searchTerm}`);
    // const { drinks } = response.data;

    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();

  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
