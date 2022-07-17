import { useQuery } from "@apollo/client";
import React from "react";
import { Header } from "./Components/Header/Header";
import {GET_All_PRODUCTS} from './query/query';
// import { Cart } from "./Components/Cart/Cart";
// import { isInCartVar } from "./cache";

function WithQuery(props: any) {
  return props.children(useQuery(props.query, props.options));
}

//const {data,isLod, err} = useQuery('Query');

export class App extends React.Component {
  render() {
    return (
      <>
        <WithQuery  query={GET_All_PRODUCTS}>
        {(options: { data: any; isLoading: boolean; }) => {
          if (options.isLoading) return <h1>Loading</h1>;
          console.log(options.data)
          return (
            <div className="App">
              <h1>{options.data && options.data.category.products[0].name}</h1>
              <h2>Start editing to see some magic happen!</h2>
            </div>
          );
        }}
        </WithQuery>
        <Header />
      </>
      
    );
  }
}