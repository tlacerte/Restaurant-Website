import React, { Component } from 'react';
import DinnerItems from './DinnerItems'

import '../Menus.css'

class Dinner extends Component {
    state = {
        lilSnacks : [
            {
                item : "Queso",
                details : "Bottomless chips and world famous queso",
                price : 4
            },
            {
                item : "Brussel Sprouts",
                details : "Maple glazed with bacon and onions",
                price : 6
            },
            {
                item : "Onion Rings",
                details : "With homemade ketchup and ranch",
                price : 4
            },
            {
                item : "Deviled Eggs",
                details : "Classic with a spicy jalapeño twist",
                price: 5
            }
        ],
        main : [
            {
                item : "Margherita",
                details : "Fresh mozzarella, tomatoes and basil",
                price : 14
            },
            {
                item : "Spicy Pep",
                details : "Spicy sauce, ricotta, roma tomato, pepperoni, basil, jalapeños",
                price : 16
            },
            {
                item : "Meatball",
                details : "Beef and pork mashed meatballs with onions",
                price : 16
            },
            {
                item : "Hawaiian",
                details : "Canadian bacon, pineapple, banana peppers",
                price : 15
            },
            {
                item : "Buffalo",
                details : "Red onion, buffalo chicken, gogonzola",
                price : 15
            },
            {
                item : "Cheesey",
                details : "No sauce, ricotta, gogonzola, feta, rosemary",
                price : 14
            },
            {
                item : "Veggie",
                details : "Mushrooms, onions, green peppers, broccoli",
                price : 14
            }

        ],
        salad : [
            {
                item : "Ceasar",
                details : "Ceasar dressing, parmesan and pizza crust croutons",
                price : 10
                
            },
            {
                item : "Chicken Chipotle",
                details : "Iceberg lettuce, tomatoes, onions, creamy ranch",
                price : 10
            },
        ]
      }

    render(){
        const composedLilSnacks = this.state.lilSnacks.map((item, index) => {
            return (
                <DinnerItems
                    id={index} 
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedSalad = this.state.salad.map((item, index) => {
            return (
                <DinnerItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedMain = this.state.main.map((item, index) => {
            return (
                <DinnerItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        return (
            <div className="full-menu">
                <h1>Dinner</h1>
                <h2>Lil Snacks</h2> 
                    <ul>{composedLilSnacks}</ul>
                <h2>Main</h2>
                    <ul>{composedMain}</ul>
                <h2>Salads</h2>
                    <ul>{composedSalad}</ul>
            </div>
        )
    }
}

export default Dinner