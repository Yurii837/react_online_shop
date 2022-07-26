import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_CATEGORY_LOC } from "../../query/query";
import './Header.scss';
import { Oval } from  'react-loader-spinner';
import classNames from "classnames";
import { selectedCategoryVar } from "../../cache";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";


function WithQuery(props: any) {
  return props.children(
    useQuery(props.query, props.options),
    useQuery(props.query2, props.options2),
  );
}

export class Header extends React.Component {

  render () {

    return (
        <WithQuery  query={GET_CATEGORIES} query2={GET_CATEGORY_LOC}>
        {(
          options: { data: { categories: any; }; }, 
          options2: { data: { selectedCategory: any; }; },
        ) => {

          if(!options.data) {
            return (
            <Oval 
              height="100"
              width="100"
              color="grey"
            />
          )}  

          const categoriesArr =  options.data.categories;
          const selectedCategory = options2.data.selectedCategory;


          return (
            <div className="header">
               <div className="header__categories">
                {categoriesArr.map((category: { name: string }) => {
                  const selected = selectedCategory === category.name;
                  return (
                    <span 
                      className={classNames('header__category', {selected: selected})}
                      key={category.name} 
                      onClick={() => selectedCategoryVar(category.name)}
                    >
                    {category.name}
                    </span>
                  )
                })}
              </div>
              <SelectCurrency />
            </div>     
          )        
        }}
      </WithQuery>       
    )
  }
}