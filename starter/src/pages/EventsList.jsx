import React from "react";
import { useLoaderData } from "react-router-dom";
import { AddEvent } from "./Addevent";
import { SearchResultsList } from "../components/SearchResultsList";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { CategorySearchBar } from "../components/CategorySearchBar";
import { Heading, Center, Box, Flex } from "@chakra-ui/react";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const users = await fetch("http://localhost:3000/users");
  const categories = await fetch("http://localhost:3000/categories");

  return {
    users: await users.json(),
    events: await events.json(),
    categories: await categories.json(),
  };
};

export const EventsList = () => {
  const [isLargerThan1280, isLargerThan480] = useMediaQuery([
    "(min-width: 1280px)",
    "(min-width: 480px)",
  ]);

  const { events, categories } = useLoaderData();
  const [results, setResults] = useState(null);
  //{isLargerThan1280 ? "#ECECEC" : "blue"
  //Center: align-items={"center"} display={"flex"} flex-wrap={"wrap"}
  //Box searchresult: align-items={"center"}  flex-wrap={"wrap"}
  return (
    <Center bgColor="#ECECEC" minHeight="100vh">
      <Box>
        <Flex justifyContent={"center"}>
          <Heading
            size={isLargerThan480 ? "4xl" : "md"}
            color={isLargerThan1280 ? "Grey" : "black"}
          >
            Winc Assignment React Advanced
          </Heading>
        </Flex>

        <Flex justifyContent={"center"} margin="20px">
          <CategorySearchBar
            setResults={setResults}
            events={events}
            categories={categories}
          />
        </Flex>

        <Box height={"100%"} width={"100%"} padding="10px">
          {results === null ? (
            <SearchResultsList results={events} />
          ) : (
            <SearchResultsList results={results} />
          )}
        </Box>
        <Box>
          <Flex
            margin={"20px"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <AddEvent AddEvent={AddEvent} />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

//Voorbeeld Booking:
// const [filters, setFilters] = useState({
//   searchTerm: "",
//   category: "",
//   date: "",
//   location: "",
// });
// <Input
//   placeholder="Zoeken"
//   value={filters.searchTerm}
//   onChange={(e) => handleChange({ searchTerm: e.target.value })}
// />
// <Button onClick={() => handleChange({ category: category.id })}

// // Zo zou de functie eruit kunnen komen te zien, functie filter voorbeeld
// const handleChange = (eindFilter) => {
//   const nieuweFilter = { ...filters, ...eindFilter };
//   setFilters(nieuweFilter);

//     const resultaat = events.filter((event) => {
//       const zoekFunctie = nieuweFilter.searchTerm === "" ||
//           event.title.toLowerCase().includes(newFilters.searchTerm.toLowerCase());

// referentie naar variabel (javascript)
// console.log(`dit is een tekst en een ${variabele}`)
// React: value={variabele}
// `` backticks
