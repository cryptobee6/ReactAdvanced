import React  from 'react';
import {useForm } from "react-hook-form";
import {  Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
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



  
  export const loader = async (events) => {
    console.log("events-id", events.id)
    const events1 = await fetch(`http://localhost:3000/events`);
    return { 
      events: await events1.json(),  
  }}

  
export const DeleteEvent = ({events}) => {
  console.log("DeleteEvents:", events.id)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {formState: { isSubmitting }} = useForm();

const navigate = useNavigate();

const onDeleteEventClicked = () => {

        fetch(`http://localhost:3000/events/${events.id}`, {
          method: "DELETE"
        })
          .then((res) => {
            console.log("res:", res)
            navigate("/");
            
          })
          .catch((err) => {
            console.log("err:", err)
          });
  }

 

  return (
    <>
      <Button onClick={onOpen}>Delete Event</Button>

      <Modal isOpen={isOpen} onClose={onClose} onSubmit={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do you want to delete the event?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={(events) => {onDeleteEventClicked(events)}} >
                    Delete Event
                </Button>
                <Button mt={4} colorScheme='red' isLoading={isSubmitting} type='submit' onClick={() =>onClose()}>
                    Cancel
                </Button>
          </ModalBody>

          <ModalFooter>

            
          </ModalFooter>
          
        </ModalContent>
      </Modal>
    </>
  )
}

// export const loader = async ({params}) => {
//   const events = await fetch(`http://localhost:3000/events/${params.id}`);
//   return { 
//     events: await events.json(), 
// }}


 

    // console.log("probeersel:", events)
    // console.log("title:", title)
    // console.log("description:", description)
    // console.log("location:", location)
    // console.log("startTime:", startTime)
    // console.log("endTime:", endTime)