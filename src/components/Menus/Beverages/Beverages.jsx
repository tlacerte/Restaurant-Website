import React, { Component } from 'react';
import BeverageItems from './BeverageItems'

import '../Menus.css'

class Beverages extends Component {
    state = {
        alcoholic : [
            {
                item : "Mezcal Margarita",
                details : "fresh lime juice and triple sec",
                price : 9
            },
            {
                item : "Bird Up",
                details : "Rum and Cherry Coke",
                price : 7
            },
            {
                item : "Frozen Marg",
                details : "you know you want this",
                price : 8
            }, 
            {
                item : "Spicy Bloody Mary/Maria",
                details : "Vodka or Tequila",
                price : 8
            },
            {
                item : "Salad",
                details : "Vodka, soda, cucumber, lime",
                price : 7
            },
            {
                item : "Dessert",
                details : "Jello shots while supplies last",
                price : 1
            }
        ],
        juices : [
            {
                item : "Sick Beat",
                details : "Beats, Carrots, Lemon, Ginger",
                price : 7
            },
            {
                item : "Classy",
                details : "Apple, Banana, Strawberry, Spinach",
                price : 7
            },
            {
                item : "Tropical Times",
                details : "Mango, Pineapple, Kale, Coconut",
                price : 7
            },
            {
                item : "Kombucha",
                details : "Ginger, Blueberry, or Guava",
                price : 5
            }
        ],
        classic : [
            {
                item : "Coffee",
                details : "Iced or Hot, side of cream and sugar",
                price : 3

            },
            {
                item : "Soda",
                details : "Coca-cola products",
                price : 3
            },
            {
                item : "Iced Tea",
                details : "Sweet or Regular",
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
            <div className="full-menu">
                <h1>Beverages</h1>
                <h2>Alcoholic</h2> 
                    <ul>{composedAlcoholic}</ul>
                <h2>Juices</h2>
                    <ul>{composedJuices}</ul>
                <h2>Classic</h2>
                    <ul>{composedClassic}</ul>
            </div>
        )
    }
}

export default Beverages