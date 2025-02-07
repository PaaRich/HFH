/* eslint-disable react/prop-types */
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
//import { useState } from 'react';


function AutoComplete({item,setItem}) {
  
  
    //const [items,setItems]=useState()
  // note: the id field is mandatory
  // const items = [
  //   {
  //     id: 0,
  //     title: 'Cobol'
  //   },
  //   {
  //     id: 1,
  //     title: 'JavaScript'
  //   },
  //   {
  //     id: 2,
  //     title: 'Basic'
  //   },
  //   {
  //     id: 3,
  //     title: 'PHP'
  //   },
  //   {
  //     id: 4,
  //     title: 'Java'
  //   }
  //   ]
    
  const styles = {
     height: "44px",
     border: "1px solid #dfe1e5",
     borderRadius: "24px",
     backgroundColor: "white",
     boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
     hoverBackgroundColor: "#eee",
     color: "#212121",
     fontSize: "16px",
     fontFamily: "Arial",
     iconColor: "grey",
     lineColor: "rgb(232, 234, 237)",
     placeholderColor: "grey",
     clearIconMargin: '3px 14px 0 0',
    searchIconMargin: '0 0 0 16px'
   };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
   string==''?setItem(item): setItem(results)
  }

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result)
  // }

  // const handleOnSelect = (item) => {
  //   // setPost(item.filter((item)=>{item.title==searchRef.target.value}))
  //   console.log(item)
  // }

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  const formatResult = (items) => {
    return (
      <>
        {/* <span style={{ display: 'none', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left',cursor:"pointer",padding:"10px 0"}}>{items.title}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 700 }}>
          <ReactSearchAutocomplete
            items={item}
            onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["title"] }}
            resultStringKeyName="title"
            styling={styles}
            placeholder='Search for Post...'
            //showItemsOnFocus:true
            //showNoResultsText="Text to display"        
          />
        </div>
      </header>
    </div>
  )
}

export default AutoComplete;