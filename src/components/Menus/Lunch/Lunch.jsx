import React, { Component } from 'react';
import LunchItems from './LunchItems'

import '../Menus.css'

class Lunch extends Component {
    state = {
        lilSnacks : [
            {
                item : "Queso",
                details : "Bottomless chips and world famous queso",
                price : 4
            },
        ],
        main : [
            {
                item : "Steak Sandwich",
                details : "side of fries and garlic aoli",
                price : 14
            }
        ],
        salad : [
            {
                item : "Chicken Chipotle",
                details : "On iceberg lettuce, tomatoes, creamy dressing",
                price : 10

            }
        ]
      }

    render(){
        const composedLilSnacks = this.state.lilSnacks.map((item, index) => {
            return (
                <LunchItems
                    id={index} 
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedSalad = this.state.salad.map((item, index) => {
            return (
                <LunchItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedMain = this.state.main.map((item, index) => {
            return (
                <LunchItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        return (
            <>
                <h1>Lunch</h1>
                <h2>Lil Snacks</h2> 
                    <ul>{composedLilSnacks}</ul>
                <h2>Main</h2>
                    <ul>{composedMain}</ul>
                <h2>Salads</h2>
                    <ul>{composedSalad}</ul>
            </>
        )
    }
}

export default Lunch