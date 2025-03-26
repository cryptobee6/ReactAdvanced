import React  from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const BackPage = () =>{


    return(
        <Link to={"http://localhost:5173"}>
            <Button mt={4} colorScheme='blue'>Go Back</Button>
        </Link>
    )

}
 