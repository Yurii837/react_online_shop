/* eslint-disable @typescript-eslint/ban-types */
import React, { RefObject } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES, GET_CURRENCY_LOC } from "../../query/query";
import './SelectCurrency.scss';
import classNames from "classnames";
import { selectedCurrencyVar } from '../../cache';

function WithQuery(props: any) {
  return props.children(
    useQuery(props.query, props.options),
    useQuery(props.query2, props.options2),
  );
}

interface State {
  isOptions: boolean | undefined
}


export class SelectCurrency extends React.Component<{}, State> {

state = {
  isOptions: false,
}

wrapperRef: RefObject<any> = React.createRef();

componentDidMount() {
  document.addEventListener("click", this.handleClick);
}

componentWillUnmount() {
  document.removeEventListener("click", this.handleClick);
}



handleClick = (event: any) => {
  
  if(this.wrapperRef && this.wrapperRef.current.contains(event.target)) {
    console.log(`click inside`)
    this.setState({isOptions: true})
  } else {
  this.setState({isOptions: false})
  console.log(`click outside`)
  }
}



  render () {
    console.log(`render isOption ${this.state.isOptions}`)
    const {isOptions} = this.state;

    return (
        <WithQuery query={GET_CURRENCIES} query2={GET_CURRENCY_LOC}>
        {(
          options: { data: { currencies: any; }; },
          options2: { data: any; }
        ) => {

          if(!options.data) {
            return <h2>Loading...</h2>}  

          const currenciesArr = options.data.currencies;
          const selectedCurrency = options2.data.selectedCurrency;


          return (
              <div className={classNames("select", {open: isOptions})}>
                <div className="select__trigger" 
                ref={this.wrapperRef}
                >
                  <span>{selectedCurrency}</span>
                  <div className="select__arrow"></div>
                </div>
                <div className="select__options" 
                >
                  {currenciesArr.map((currencyObj: { symbol: string | undefined; label: string | undefined; }) => {
                  return (
                    <span 
                      key={currencyObj.symbol} 
                      className="select__option"  
                      data-value={currencyObj.symbol} 
                      onClick={(e:any) => {
                        selectedCurrencyVar(e.target.dataset.value)
                      }}                   
                    >
                      {`${currencyObj.symbol} ${currencyObj.label}`}
                    </span>
                  )
                })}
                </div>
              </div>
          )        
        }}
      </WithQuery>
    )
  }
}
