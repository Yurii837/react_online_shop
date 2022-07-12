import { useQuery } from "@apollo/client";
import React from "react";
import {GET_All_PRODUCTS} from './query/query';
// import { useQuery } from "@apollo/client";
// import { GetEndpoint } from './Api/Api'; 


function App() {

//   const query = `query categories {
//     category {
//       products {
//         name,
//         id,
//         category
//       }
//     }
//   }`

//  const getResponce = async() => {
//   const responce = await GetEndpoint(query);
//   console.log(responce.data.category.products);
//  }

  
  const {data, loading, error} = useQuery(GET_All_PRODUCTS);
  console.log(data);
  console.log(loading);
  console.log(error)

  

//  useEffect(() => {
//   getResponce();
//  }, [])

  return (
    <div className="App">
      <h2>Project</h2>
    </div>
  );
}

export default App;
