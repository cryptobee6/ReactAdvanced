import { Button, Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

export const CategorySearchBar = ({setResults, events, categories}) => { 
    console.log("categories:", categories)   
    
        const [searchTerm, setSearchTerm] = useState("")
        const [selectedCategory, setSelectedCategory] = useState("")

        const [selectedButton, setSelectedButton] = useState(null);
       

    const handleChange = (value=searchTerm, category=selectedCategory) => {

        setSelectedCategory(category)
        setSearchTerm(value)

            const results = events.filter((event) => {
                const matchesSearch = event.title.toLowerCase().includes(value.toLowerCase());
                const matchesCategory = !category || event.categoryIds.includes(parseInt(category));
                return matchesSearch && matchesCategory
    })
        setResults(results)
    }

    const handleClick = (id) => {
        setSelectedButton(id);
      };


    return (
        <Box>
             <Input 
                placeholder="Type to search..." 
                value={searchTerm} 
                onChange={(e) => handleChange(e.target.value, selectedCategory)}
                bg="white"
                
            /> 
            <Box>

                {categories.map((category) => (
                    <Button
                    onClick={() => {handleChange(searchTerm, category.id); handleClick(category.id)}}
                    key={category.id}
                    style={{
                        backgroundColor: selectedButton === category.id ? 'grey' : 'lightgray', // Kleur op basis van selectie
                        color: 'white',
                        padding: '10px 20px',
                        margin: '5px',
                      }}
                    >
                        {category.name}
                    </Button>
                ))}
                </Box>
</Box>
    )
}

/*

const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      event.categoryIds.includes(parseInt(selectedCategory));
    return matchesSearch && 

    */


    // const handleChangeSearch = (value) => {
    //     console.log("valueButton:", value)
    //     console.log("valueSearchbar:", value)
    //     const results = events.filter((event) => {
    //         console.log("eventsCategoryIds:", event.categoryIds)            
    //         const filterEventsSearchbar = event.title.toLowerCase().includes(value)
    //         console.log("filterEventsSearchbar:", filterEventsSearchbar)
    //         return filterEventsSearchbar 
    //     })
    //     setResults(results)
    //     setInputText(value)
    // }


    // const handleChangeButton = (category) => {
    //     console.log("valueButton:", category)
    //     const results = events.filter((event) => {
    //         console.log("eventsCategoryIds:", event.categoryIds)
    //         const filterEventsCategory = event.categoryIds.includes(Number(category))
    //         console.log("eventsCategoryreturn:", filterEventsCategory)
    //         return filterEventsCategory
    //     })
    //     setResults(results)
    // }
 

    ///////////////////////////optie 2
    // const handleChange = (searchTerm, selectedCategory, value) => {
        
    //     setSelectedCategory(selectedCategory)
    //     console.log("searchTerm", searchTerm)
    //     console.log("selectedCategory", selectedCategory)

    //         const results = events.filter((event) => {
    //             const matchesSearch = event.title.toLowerCase().includes(value.toLowerCase());
    //             const matchesCategory = !selectedCategory || event.categoryIds.includes(parseInt(selectedCategory));
    //             return matchesSearch && matchesCategory
        
    // })
    //     setResults(results)
    //     setSearchTerm(value)
    //     setSelectedCategory(selectedCategory)
    // }
   


        // console.log("selectedCategory", selectedCategory)
   
    // console.log("searchTerm:", searchTerm)
    // console.log("selectedCategory:", selectedCategory)

    
    // const handleChangeSearch = (value) => {
    //     const results2 = events.filter((event) => {       
    //         const filterEventsSearchbar = event.title.toLowerCase().includes(value)
    //         return filterEventsSearchbar 
    //     })
    //     setResults(results2)
    //     setSearchTerm(value)
    // }


    // const handleChangeCategory = (category) => {
    //     const results1 = events.filter((event) => {
    //         const filterEventsCategory = event.categoryIds.includes(Number(category))
    //         return filterEventsCategory
    //     })
    //     setResults(results1)
    //     // setSelectedCategory(category)
    // }

    // console.log("SelectedCategory:", selectedCategory)


    // {} of ()
    // onChange={(e) => {
    //     console.log("Zoekbalk:", e.target.value);
    //     handleChange(e.target.value, selectedCategory);
    // }}



    // console.log("changeColor1", changeColor)

    // const handleClick = (category=selectedCategory) => { 
    //     setSelectedCategory(category)
    //     setChangeColor(true)
    //     console.log("categorie", category)



    //     const joe = changeColor ? "lightgrey" : "blue"
    //     console.log("changeColor", changeColor)
    //     console.log("kleur:", joe)
        
    // }  
