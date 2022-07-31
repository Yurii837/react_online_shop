import React from "react";
import './ProductList.scss';
import { useQuery } from "@apollo/client";
import { Oval } from  'react-loader-spinner';
import { GET_CATEGORY_PRODUCTS } from "../../query/query";
// import { cartProductsVar } from "../../cache";

function WithQuery(props: any) {
  return props.children(
    useQuery(props.query, props.options),
  );
}

export class ProductList extends React.Component {

  render () {
    return (
      <WithQuery  query={GET_CATEGORY_PRODUCTS}>
        {(
          options: { data: { any: any; }; },
        ) => {

          if(!options.data) {
            return (
            <Oval 
              height="100"
              width="100"
              color="blue"
            />
          )}  

          const categoryProductsArr =  options.data;
          console.log(categoryProductsArr)


          return (
            <div className="">
              <h1>Category Name</h1>

            </div>     
          )        
        }}
      </WithQuery>       
    )

  }
}