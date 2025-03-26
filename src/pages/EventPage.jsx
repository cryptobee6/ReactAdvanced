import React from "react";
import { useLoaderData } from "react-router-dom";
import { EditEvent } from "./EditEvent";
import { DeleteEvent } from "./DeleteEvent";
import { BackPage } from "./BackPage";
import { useState } from "react";
import { Heading, Text, Box, Center, Flex, Image } from "@chakra-ui/react";

export const loader = async ({ params }) => {
  console.log("params:", params);
  const users = await fetch(`http://localhost:3000/users`);
  const events = await fetch(`http://localhost:3000/events/${params.id}`);
  const categories = await fetch(`http://localhost:3000/categories`);

  return {
    users: await users.json(),
    events: await events.json(),
    categories: await categories.json(),
  };
};

export const EventPage = () => {
  const { users, events, categories } = useLoaderData();
  console.log("categories:", categories);
  console.log("events:", events);
  console.log("users:", users);

  const getCategoryNames = (categoryIds) => {
    console.log("categoryIds:", categoryIds);
    return categoryIds.map((id) => {
      const category = categories.find((cat) => Number(cat.id) === Number(id));
      return category ? category.name : "Unknown";
    });
  };

  // console.log("getCategoryName:", getCategoryNames(events))

  const resultUserName = () => {
    const getUserName = users.find(
      (By) => parseInt(By.id) === events.createdBy
    );
    return getUserName ? getUserName.name : "Unknown";
  };

  const [eventTitle] = useState(events.title);
  const [eventDescription] = useState(events.description);
  const [eventLocation] = useState(events.location);
  const [eventStartTime] = useState(events.startTime);
  const [eventEndTime] = useState(events.endTime);
  const [eventDetails] = useState({
    title: eventTitle,
    description: eventDescription,
    location: eventLocation,
    startTime: eventStartTime,
    endTime: eventEndTime,
    categoryIds: [],
  });

  return (
    <Center
      bgColor="#ECECEC"
      width="100%"
      minHeight="100vh"
      align-items={"center"}
      display={"flex"}
      flex-wrap={"wrap"}
    >
      <Box bgColor="#ECECEC">
        <Flex alignContent={"center"} justifyContent={"center"}>
          <Box padding={"20px"}>
            <Heading>{eventTitle}</Heading>
            <Box margin="10px">
              <Image src={events.image} h="350px" />
            </Box>
            <Text>User: {resultUserName(events.createdBy)}</Text>
            <Text>Category: {getCategoryNames(events.categoryIds)}</Text>
            <Text>Description: {eventDescription}</Text>
            <Text>Location: {eventLocation}</Text>
            <Text>StartTime: {eventStartTime}</Text>
            <Text>EndTime: {eventEndTime}</Text>
          </Box>
        </Flex>
        <Box>
          <Flex alignContent={"center"} justifyContent={"center"} gap="10">
            <EditEvent
              margin="10px"
              events={events}
              eventDetails={eventDetails}
            />
            <DeleteEvent events={events} DeleteEvent={DeleteEvent} />
          </Flex>
        </Box>
        <Box>
          <Flex
            alignContent={"center"}
            padding="10px"
            justifyContent={"center"}
          >
            <BackPage BackPage={BackPage} />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

// const getAuthorNames = (createdBy) => {
//   console.log("createdBy", createdBy)
//   return createdBy.map((id) => {
//     const name = users.id.find((By) => Number(By.id) === (id))
//     return name ? name.name : "unknown"
//   })

// }
//Conclusie: je kan niet mappen over een Number value.
// const user = getAuthorNames(events.createdBy)
// console.log("userrrrr:", user)

// const getAuthorNames = (user, createdBy) => {
//   const userName = users.id(user).find(id => user[id] === createdBy);
// return userName ? users.name : "Unknown";
// }

// console.log("eventsCreatedBYYYY:", typeof(events.createdBy))
// //DEZE WERKT!!!!
// function getAuthorNames(obj, createdBy) {
//   console.log("obj:", obj)
//   return Object.entries(obj).find(([id]) => createdBy === Number(id));
// }
// const user = getAuthorNames(users, events.createdBy)
// console.log("hello", users[1].name)

//Source
//https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value

// const getAuthorNames = (createdBy) => {
//   console.log("createdBy", createdBy)
//   if((createdBy) === Number(users.id)){
//     console.log("joe:", users.name)
//   }
//   else console.log("hello", "unknown")
// };

// console.log("getCreatedBy:", getAuthorNames(users, events.createdBy))

// const getAuthorNames = (createdBy) => {
//   console.log("createdBy:", createdBy)
//   return createdBy.map((id) => {
//     console.log("id1111", id)
//     const author = users.find((cat) => Number(cat.id) === Number(id));
//     return author ? author.name : "Unknown";
//   });
// };

// console.log("getCreatedBy:", getAuthorNames(events.createdBy))

//  const getAuthor = (createdBy) => {
//   return createdBy.map((id) => Number(event_createdBy) === Number(events.createdBy))
//     return author ? author.name : "Unknown"
//   }
