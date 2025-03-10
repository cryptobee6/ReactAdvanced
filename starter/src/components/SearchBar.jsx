// import { Input} from '@chakra-ui/react'
// import { useState } from 'react'

// export const SearchBar = ({setResults}) => {   

//     const[input, setInput] = useState("")


   
//   const fetchData = (value) => {

//     fetch("http://localhost:3000/events")
//     .then((response) => response.json())
//     .then((json) => {
//         const results = json.filter((event) => {
//             return event.title.toLowerCase().includes(value)
//         })
//         setResults(results)
//         })
        
//     }

//     const handleChange = (value) => {
//         setInput(value);
//         fetchData(value);
//     }


//     return (
//         <div>
            
//             <Input 
//                 placeholder="Type to search..." 
//                 value={input} 
//                 onChange={(e) => handleChange(e.target.value)}
//                 background-color="white"
//             /> 


//         </div>
//     )
// }
