import React, { Component } from 'react';
import DessertItems from './DessertItems'

import '../Menus.css'

class Dessert extends Component {
    state = {
        sweetTreats : [
            {
                item : "Chocolate Cake",
                details : "flourless",
                price : 4
            },
            {
                item : "Cheesecake",
                details : "Graham cracker crust and whipped cream",
                price : 4
            },
            {
                item : "Ice Cream Sundae",
                details : "Chocolate fudge and rainbow sprinkles",
                price : 5
            },
            {
                item : "Warm Cookies",
                details : "Chocolate chip or sugar",
                price : 3
            },
            {
                item : "Texas gold bars",
                details : "Creamy, sugary goo",
                price : 4
            }
        ]
    }
    render(){
        const composedSweetTreats = this.state.sweetTreats.map((item, index) => {
            return (
                <DessertItems
                    id={index} 
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        return (
            <div className="full-menu">
                <h1>Dessert</h1>
                <h2>Sweet Treats</h2> 
                    <ul>{composedSweetTreats}</ul>
            </div>
        )
    }
}

export default Dessert