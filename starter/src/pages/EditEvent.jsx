import React  from 'react';
import {useForm } from "react-hook-form";
import { 
    FormLabel,
    FormControl,
    Input, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'


export const EditEvent = ({events, eventDetails}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {formState: { isSubmitting }} = useForm();

  const [titleToEdit, setEventTitle] = useState(eventDetails.title);
  const [description, setDescription] = useState(eventDetails.description);
  const [location, setLocation] = useState(eventDetails.location);
  const [startTime, setStartTime] = useState(eventDetails.startTime);
  const [endTime, setEndTime] = useState(eventDetails.endTime);

  const navigate = useNavigate();

  const onClickEditEvent = () => {
    
    fetch(`http://localhost:3000/events/${events.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            title: titleToEdit,
            description: description,
            location: location,
            startTime: startTime,
            endTime: endTime,

         })
      })
        .then((res) => {
          console.log("res:", res)
          navigate("/")
          if(res.status === 200){
            return window.alert("Event edited")
          }
        })
        .catch((err) => {
          console.log("err:", err)
        });
        
}

// console.log(eventDetails ===)
//zijn de update en de bestaande ooit gelijk aan elkaar?


console.log("events:", events)

console.log("totaleobject:", eventDetails)
console.log("event_Editpagetitle", eventDetails.title)
console.log("joeeeTitleInput:", titleToEdit)

console.log("totaleobject:", eventDetails)
console.log("event_Editpagelocation", eventDetails.location)
console.log("joeeeLocationInput:", location)


// const manageInput = (varial) => {
//   if(varial){
//     eventDetails.title
//   }
//   varial
  
// }
// console.log("eindoordeel", manageInput(titleToEdit))

  return (
    <>
      <Button onClick={onOpen}>Edit Event</Button>

      <Modal isOpen={isOpen} onClose={onClose} onSubmit={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={onClickEditEvent}>
                <FormControl isRequired={true}>
                    <FormLabel htmlFor='name'>Name event</FormLabel>
                    <Input
                    id='name'
                    onChange={e=> setEventTitle(e.target.value)}
                    defaultValue={eventDetails.title}
                    />
                    <FormLabel htmlFor='name'>Description</FormLabel>
                    <Input
                    id='name'
                    onChange={e => setDescription(e.target.value)}
                    defaultValue={eventDetails.description}
                    />
                    <FormLabel htmlFor='name'>Location</FormLabel>
                    <Input
                    id='name'                    
                    onChange={e => setLocation(e.target.value)}
                    defaultValue={eventDetails.location}
                    />
                    <FormLabel htmlFor='name'>Starttime</FormLabel>
                    <Input
                    id='name'                                
                    onChange={e => setStartTime(e.target.value)}
                    defaultValue={eventDetails.startTime}
                    />
                    <FormLabel htmlFor='name'>Endtime</FormLabel>
                    <Input
                    id='name'                   
                    onChange={e => setEndTime(e.target.value)}
                    defaultValue={eventDetails.endTime}
                    />
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={() =>onClickEditEvent()}>
                    Edit
                </Button>
                </form>
          </ModalBody>

          <ModalFooter>

            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}



// ((title === eventDetails.title) ? ( setEventDetails(e.target.value)) :