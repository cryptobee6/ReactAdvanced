// import React, { useState, useEffect } from "react";
// import { Button } from "@chakra-ui/react";

// export const FilterComponent = ({ events, categories }) => {
//   //console.log("categories", categories)

//   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////https://www.youtube.com/watch?v=u1yr_HZivzk
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [filteredItems, setFilteredItems] = useState(events);

//   const filters = categories.map((category) => category.name);
//   //console.log("filters:", filters)

//   const handleFilterButtonClick = (selectedCategory) => {
//     if (selectedFilters.includes(selectedCategory)) {
//       let filters = selectedFilters.filter((el) => el !== selectedCategory);
//       setSelectedFilters(filters);
//     } else {
//       setSelectedFilters([...selectedFilters, selectedCategory]);
//     }
//   };

//   useEffect(() => {
//     filterItems();
//   }, [selectedFilters]);

//   const getCategoryId5 = (selectedCategory) => {
//     //console.log("inputcategory:", selectedCategory)
//     //console.log("categories:", categories)
//     return categories.map((category) => {
//       //console.log("id:", categories)

//       const categoryIDList = category.name.includes(selectedCategory);
//       //console.log("categoryList:", categoryIDList)
//       if (categoryIDList) {
//         return Number(category.id);
//       }
//       {
//         return null;
//       }
//     });
//   };

//   const array = [1, 2, 3];
//   const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
//   //console.log("obj:", obj)

//   const filterItems = () => {
//     if (selectedFilters.length > 0) {
//       let tempItems = selectedFilters.map((objectGetCategory) => {
//         let temp = events.filter(
//           (event) => event.categoryIds === objectGetCategory
//         );
//         //console.log("hoihoihoihoi:", events.categoryIds, objectGetCategory )
//         return temp;
//       });
//       setFilteredItems(tempItems.flat());
//     } else {
//       setFilteredItems([...events]);
//     }
//   };
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////

//   //Hiermee kan ik de categorieIDList krijgen --- WERKT!!!
//   const getCategoryId = (categorySelected) => {
//     //console.log("inputcategory:", categorySelected)
//     //console.log("categories:", categories)
//     return categories.map((category) => {
//       //console.log("id:", categories)

//       const categoryIDList = category.name.includes(categorySelected);
//       //console.log("categoryList:", categoryIDList)
//       if (categoryIDList) {
//         return Number(category.id);
//       }
//       {
//         return null;
//       }
//     });
//   };
//   const categorySelected1 = ["games"];
//   //console.log("getCategoryId:", getCategoryId(categorySelected1))

//   const getCategoryIdFilter = (getCategoryId) => {
//     return getCategoryId.filter((item) => item != null);
//   };
//   //console.log("getCategoryIdFilter:", getCategoryIdFilter(getCategoryId(categorySelected1)))

//   const resultaatDeel1 = getCategoryIdFilter(getCategoryId(categorySelected1));
//   //console.log("resultaatDeel1", resultaatDeel1)

//   //Hiermee wordt de check gedaan welke events horen bij de geselecteerde categorien --- WERKT!!!!
//   const matchEvents = (events1) => {
//     //console.log("probmatchEvents:", events)
//     return events1.map((events1) => {
//       const returnIds = events.filter((iets) => iets.categoryIds == events1);
//       // //console.log("probIets:", iets.categoryIds, events1)
//       return returnIds ? returnIds : "unknown";
//     });
//   };

//   const matchEventresults = matchEvents(resultaatDeel1);
//   //console.log("matchEvents:", matchEventresults.flat())
// };

// // const categoriesList = Array.from(
// //     new Set(categories.map((category) => category.name))
// // )
// // //console.log("categoriesList:", categoriesList)

// //     return (
// //         <div>
// //             <div>
// //                 {filters.map((category, idx) => (
// //                     <Button
// //                     onClick={() => handleFilterButtonClick(category)}
// //                     className={`button ${
// //                         selectedFilters?.includes(category) ? "active" : ""
// //                     }`}
// //                     key={`filters-${idx}`}
// //                     >
// //                         {category}
// //                     </Button>
// //                 ))}
// //             </div>
// //             <div>
// //                 {filteredItems.map((item, idx) => (
// //                     <div key={`items-${idx}`}>
// //                         <p>Title: {item.title}</p>
// //                         <p>Location: {item.location}</p>
// //                         <p>Description: {item.description}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>

//     )
// }

// /*const checkboxHandler = (e) => {
//     //console.log(e.target.checked)
//     setSelectedItems(e.target.checked)
// }

// const selectionCheck = () => {
//     if(selectedItems){
//         //console.log("selectionCheck:", categories.name)
//     }{
//     //console.log("none")
// }
// }
// //console.log("selectionCheck123:", selectionCheck())
// //console.log("selectedItems:", selectedItems)

//     return (
//     <div>
//     {categories.map((category) =>
//     <Checkbox margin="10px" key={categories.id} checked={selectedItems} onChange={checkboxHandler}>{category.name}</Checkbox>
//     )}
//     </div>
//     )
// }

//     const array1 = ["hello", "saab"]
//     const object1 = {number: ["99", "88"], hello:"1"}
//     const [filteredEvents, setfilteredEvents] = useState(object1)
//     const [filteredEventsarray, setfilteredEventsarray] = useState(array1)

//     //console.log("filteredEvents:", filteredEvents)

//     //console.log("filteredEvents:", filteredEventsarray)*/

//     export const FilterComponent = ({events, categories}) => {
//         //console.log("categories", categories)

//         const [filteredEvents, setfilteredEvents] = useState(events);

//         //console.log("filteredEvents:", filteredEvents)

//     //Hiermee kan ik de categorieIDList krijgen --- WERKT!!!
//     const getCategoryId = (categorySelected) => {
//         //console.log("inputcategory:", categorySelected)
//         //console.log("categories:", categories)
//         return categories.map((category => {
//             //console.log("id:", categories)

//             const categoryIDList = category.name.includes(categorySelected)
//             //console.log("categoryList:", categoryIDList)
//             if (categoryIDList){
//                 return Number(category.id)
//             }
//             {
//                 return null
//             }
//             }
//         ))}
//     const categorySelected1 = ['games']
//         //console.log("getCategoryId:", getCategoryId(categorySelected1))

//     const getCategoryIdFilter = (getCategoryId) => {
//         return getCategoryId.filter((item) => item != null)
//     }
//     //console.log("getCategoryIdFilter:", getCategoryIdFilter(getCategoryId(categorySelected1)))

//     const resultaatDeel1 = getCategoryIdFilter(getCategoryId(categorySelected1))
//     //console.log("resultaatDeel1", resultaatDeel1)

//     // const resultCategory = getCategoryIdFilter(getCategoryId(['games']))
//     // //console.log("typeResultCategory:", typeof(resultCategory))

//     //Hiermee wordt de check gedaan welke events horen bij de geselecteerde categorien --- WERKT!!!!  (HAKEN werken niet voldoende goed)
//         // const matchEvents = (events1) => {
//         //     //console.log("probmatchEvents:", events)
//         //     return events1.map((events1) => {
//         //     const returnIds = events.filter((iets) => {iets.categoryIds == events1
//         //     //console.log("probIets:", iets.categoryIds, events1)})
//         //     if(returnIds){
//         //         return events
//         //     }{
//         //         return null
//         //     }
//         // });
//         //     } ;

//         //Hiermee wordt de check gedaan welke events horen bij de geselecteerde categorien --- WERKT!!!!
//             const matchEvents = (events1) => {
//                 //console.log("probmatchEvents:", events)
//                 return events1.map((events1) => {
//                 const returnIds = events.filter((iets) => iets.categoryIds == events1)
//                 // //console.log("probIets:", iets.categoryIds, events1)
//                 return returnIds ? returnIds : "unknown"
//             })}

//     // //console.log("eventCategory:", events.map((event) => event.categoryIds))
//     // const eventCategoryList = events.map((event) => event.categoryIds)
//     // //console.log("type:", typeof(eventCategoryList))
//     // //console.log("typeCatSelected1:", typeof(categorySelected1))

//         //console.log("matchEvents:", matchEvents(resultaatDeel1))

//         const resultaatDeel2 = matchEvents(resultaatDeel1)
//         //console.log("resultaatDeel2:", resultaatDeel2)
//         const resultaatDeel3 = resultaatDeel2.map((resultaat) => resultaat.map((resultaat1) => resultaat1))
//         //console.log("resultaatDeel3:", resultaatDeel3)

//         //Filter alle duplicates en houd alleen unieke waarden over
//         // const numberCatList = Array.from(
//         //     new Set(categories.map((category) => category.id))
//         // )
//         // //console.log("numberCatList:", numberCatList)

//         const categoriesList = Array.from(
//             new Set(categories.map((category) => category.name))
//         )
//         //console.log("categoriesList:", categoriesList)

//     }
