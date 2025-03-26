import React from 'react'
// import { SearchResult } from './SearchResult'
import { useLoaderData } from "react-router-dom";
import { SimpleGrid, Text, Card, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { Image, Box } from '@chakra-ui/react';


export const SearchResultsList = ({ results }) => {
    const { users, events, categories } = useLoaderData();
    console.log("categories:", categories);
    console.log("events:", events);
    console.log("users:", users);
    console.log("SearchResultsList:", results);
  
  const[isLargerThan1280, isLargerThan480] = useMediaQuery([
    '(min-width: 1280px)',
    '(min-width: 480px)',
  ])

    if (!results || results.length === 0) {
      return <p>No results found</p>;
    }
  
    return (
      //simpleGrid: align-items={"center"} flex-wrap={"wrap"}
   
    <SimpleGrid  gap="2" padding="20px" width={isLargerThan1280 ? "90vw" : "80vw"} minChildWidth={"250px"}>
        {results.map((result, index) => (
        
        <Card key={result.id || index} padding="10px" border="1px solid" bgColor="lightblue"  >
                 <Link to={`events/${result.id}`}>
                 <Heading size={isLargerThan480 ? "xl" : "lg"} > {result.title}</Heading>
                 </Link>

                 <Text>Description: {result.description}</Text>
                             
                 <Text>StartTime: {result.startTime}</Text>
                 <Text>EndTime: {result.endTime}</Text>
                 
                 <Image src={result.image} h="50px" 
                 style={{ width: '150px', margin: '10px' }} />
                 
        </Card>
        )
        )}
    </SimpleGrid>
    );
  };

  // display="grid" 
  // justifyContent={"center"}