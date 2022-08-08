import React from "react";
import './ProductList.scss';
import { DocumentNode, QueryResult, TypedDocumentNode, useQuery, useReactiveVar } from "@apollo/client";
import { Oval } from  'react-loader-spinner';
import { GET_CATEGORY_PRODUCTS } from "../../query/query";
import { selectedCategoryVar } from '../../cache';



function WithQuery(props: { children: (arg0: QueryResult<any, { selectedCategory: string; }>) => any; query: DocumentNode | TypedDocumentNode<any, { selectedCategory: string; }>; }) {
  const selectedCategory = useReactiveVar(selectedCategoryVar)

  return props.children(
    useQuery(props.query, {
      variables: {
        selectedCategory: selectedCategory
      }
    }),
    
  )
}


export class ProductList extends React.Component {


  render () {
  console.log(`list render`)
    return (
 
        <WithQuery  query={GET_CATEGORY_PRODUCTS} >
          {(
            options: any          
          ) => {
  
            if(!options.data) {
              return (
              <Oval 
                height="100"
                width="100"
                color="blue"
              />
            )}  
  
            const productsArr: Product[] =  options.data.category.products;
            console.log(`StateSelectedCategore in List ${selectedCategoryVar()}`)
            console.log(productsArr)
  
  
            return (
              <div className="">
                <h1>Category Name</h1>
                <div className="list">
                  {productsArr.map((product) => 
                  <div key={product.id}>{product.name}</div>
                  )}
                </div>
  
              </div>     
            )        
          }}
        </WithQuery>  
    )
  }
}