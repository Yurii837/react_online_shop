import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_CATEGORY_LOC, GET_CURRENCIES, GET_CURRENCY_LOC } from "../../query/query";
import './Header.scss';
import { Oval } from  'react-loader-spinner';
import classNames from "classnames";
import { selectedCategoryVar, selectedCurrencyVar } from '../../cache';


function WithQuery(props: any) {
  return props.children(
    useQuery(props.query, props.options),
    useQuery(props.query2, props.options2),
    useQuery(props.query3, props.options3),
    useQuery(props.query4, props.options4),
  );
}

export class Header extends React.Component {

  returnCurrencySumbol = (fullString: string) => {
    return fullString.split(' ')[0]
  }

  render () {

    return (
        <WithQuery  query={GET_CATEGORIES} query2={GET_CATEGORY_LOC} query3={GET_CURRENCIES} query4={GET_CURRENCY_LOC}>
        {(
          options: { data: { categories: any; }; }, 
          options2: { data: { selectedCategory: any; }; },
          options3: { data: { currencies: any; }; },
          options4: { data: any; }
        ) => {

          if(!options.data && !options3.data) {
            return (
            <Oval 
              height="100"
              width="100"
              color="grey"
            />
          )}  

          const categoriesArr =  options.data.categories;
          const selectedCategory = options2.data.selectedCategory;
          const currenciesArr = options3.data.currencies;
          const selectedCurrency = options4.data.selectedCurrency;


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

              <div className="header__currency">
                <select 
                  name="currencies"
                  className=""
                  // value={this.returnCurrencySumbol(selectedCurrency)}
                  value={selectedCurrency}
                  onChange={(e) => {selectedCurrencyVar(e.target.value)}}
                >
                  {currenciesArr.map((currencyObj: { symbol: string | undefined; label: string | undefined; }) => {
                    return (
                      <option key={currencyObj.symbol}>
                        {`${currencyObj.symbol} ${currencyObj.label}`}
                      </option>
                    )
                  })}

                </select>
              </div>
            </div>     
          )        
        }}
      </WithQuery>
    )
  }
}