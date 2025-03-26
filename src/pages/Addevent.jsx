import React  from 'react';
import {useForm } from "react-hook-form";
import {  FormErrorMessage,
    FormLabel,
    FormControl,
    Input, Button } from '@chakra-ui/react'
import { useState } from "react"
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
  import { useLoaderData } from "react-router-dom";

export const AddEvent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {formState: { errors, isSubmitting },} = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

const navigate = useNavigate();
const wholeNumber = () => {

  const hoi = Math.random()
      if(hoi<=0.33){
        return 1
      } else if (hoi<=0.67) {
        return 2
      } else {
        return 3
      }
    
}

const wholeNumberString = () => {
  const hoi = Math.random()
      if(hoi<=0.33){
        return 1
      } else if (hoi<=0.67) {
        return 2
      } else {
        return 3
      }
    
}

const loader = async ({ params }) => {
  const events = await fetch(`http://localhost:3000/events`);
  return {
    events: await events.json(),
  };
}

const { events } = useLoaderData();



  const onClickAddEvent = (events) => {
    events.preventDefault();

    

    console.log("probeersel:", events)

    console.log("title:", title)
    console.log("description:", description)
    console.log("location:", location)
    console.log("startTime:", startTime)
    console.log("endTime:", endTime)

    fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            title: title,
            description: description,
            location: location,
            startTime: startTime,
            endTime: endTime,
            categoryIds: [wholeNumber()],
            createdBy: wholeNumberString(),
            image: Math.random()
         })
      })
        .then((res) => {
          console.log("res:", res)
          navigate(`/${[-1]}`);
        })
        .catch((err) => {
          console.log("err:", err)
        });
}
console.log("aantal events:", events.length)
  return (
    <>
      <Button onClick={onOpen}>Add Event</Button>

      <Modal isOpen={isOpen} onClose={onClose} onSubmit={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={onClickAddEvent}>
                <FormControl isRequired={true}>
                    <FormLabel htmlFor='name'>Name event</FormLabel>
                    <Input
                    id='name'
                    onChange={e => setTitle(e.target.value)}
                    />
                    <FormErrorMessage>
                    This is required
                    </FormErrorMessage>
                    <FormLabel htmlFor='name'>Description</FormLabel>
                    <Input
                    id='name'
                    onChange={e => setDescription(e.target.value)}
                    />
                    {/* <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage> */}
                    <FormLabel htmlFor='name'>Location</FormLabel>
                    <Input
                    id='name'                    
                    onChange={e => setLocation(e.target.value)}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='name'>Starttime</FormLabel>
                    <Input
                    id='name'                                
                    onChange={e => setStartTime(e.target.value)}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='name'>Endtime</FormLabel>
                    <Input
                    id='name'                   
                    onChange={e => setEndTime(e.target.value)}
                    />
                    <FormErrorMessage>
                    {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' onClick={() =>onClose()}>
                    Add Event
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

/*
{
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[location, setLocation] = useState('');
    const[startTime, setStarttime] = useState('');
    const[endTime, setEndtime] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function



    <form id="editmodal" className="w-full max-w-sm">
            <div className="md:flex">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500">
                            Name
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500">
                            Description
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500">
                            Location
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500">
                            Startime
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500">
                            Endtime
                    </label>
                </div>
                <input 
                className="bg-gray-200 border-2 border-gray-200"
                placeholder="hello"
                type="text"
                ></input>
            </div>
            </form>





            
  function onSubmit(values) {
    
    return new Promise((resolve) => {
        
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    }),

    

    

    fetch("http://localhost:3000/events", {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(() => {
        console.log("new event added")
    })
  }
    */