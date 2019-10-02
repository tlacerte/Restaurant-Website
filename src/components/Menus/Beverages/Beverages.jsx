import React, { Component } from 'react';
import BeverageItems from './BeverageItems'

import '../Menus.css'

class Beverages extends Component {
    state = {
        isShowing : false,
        alcoholic : [
            {
                item : "Mezcal Margarita",
                details : "fresh lime juice and triple sec",
                price : 9
            }
        ],
        juices : [
            {
                item : "Sick Beat",
                details : "Beats, Carrots, Lemon, Ginger",
                price : 8
            }
        ],
        classic : [
            {
                item : "Coffee",
                details : "side of cream and sugar",
                price : 3

            }
        ]
      }

    render(){
        const composedAlcoholic = this.state.alcoholic.map((item, index) => {
            return (
                <BeverageItems
                    id={index} 
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedJuices = this.state.juices.map((item, index) => {
            return (
                <BeverageItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedClassic = this.state.classic.map((item, index) => {
            return (
                <BeverageItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        return (
            <>
                <h1>Beverages</h1>
                <h2>Alcoholic</h2> 
                    <ul>{composedAlcoholic}</ul>
                <h2>Juices</h2>
                    <ul>{composedJuices}</ul>
                <h2>Classic</h2>
                    <ul>{composedClassic}</ul>
            </>
        )
    }
}

export default Beverages