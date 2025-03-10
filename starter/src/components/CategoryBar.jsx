// import { Button } from '@chakra-ui/react'

// export const CategoryBar = ({setResults, events, categories}) => { 
//     console.log("categories:", categories)   

//     const handleChange = (value) => {
//         console.log("value:", value)
//         const results = events.filter((event) => {
//             console.log("eventsCategoryIds:", event.categoryIds)
//             console.log("eventsCategoryreturn:", event.categoryIds.includes(Number(value)))
//             return event.categoryIds.includes(Number(value))
            
//         })
//         setResults(results)
//     }


//     return (
//         <div>
//                 {categories.map((category) => (
//                     <Button
//                     onClick={() => handleChange(category.id)}
//                     key={category.id}
//                     >
//                         {category.name}
//                     </Button>
//                 ))}
//         </div>
//     )
// }
