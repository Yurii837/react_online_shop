import React from "react";
import './ProductList.scss';
import { useQuery, useReactiveVar } from "@apollo/client";
import { Oval } from  'react-loader-spinner';
import { GET_CATEGORY_PRODUCTS } from "../../query/query";
import { selectedCategoryVar } from '../../cache';
// import { cartProductsVar } from "../../cache";



function WithQuery(props: any) {
  return props.children(
    useQuery(props.query, props.options),
    // useReactiveVar()
  );
}

// function WithReactiveVar(Component: React.Component) {
//   const reactiveVar = useReactiveVar(props.reactiveVar)
//   return (
//     <reactiveVar={reactiveVar}/>
//   )
// }

function WithVariable(props: any) {
  return props(
    useReactiveVar(props.reactiveVar),
  );
}

export class ProductList extends React.Component {

  // state = {selectedCategory: <ReturnVariable reactiveVar={selectedCategoryVar}/>}

  
// const a = useReactiveVar(selectedCategoryVar)


  render () {
    // console.log(this.state.selectedCategory)
    return (
      <>
        {/* <ReturnVariable reactiveVar={selectedCategoryVar}>
        {(data: any) => {
          console.log(data)
        }} */}
        
        <WithVariable reactiveVar={selectedCategoryVar}>
          {(data: any) => console.log(`with variable deta ${data}`)}
        
        
        <WithQuery  query={GET_CATEGORY_PRODUCTS} options={{
          variables: {
            selectedCategory: selectedCategoryVar()
          }
        }}>
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
        
        </WithVariable>
      </>      
    )

  }
}