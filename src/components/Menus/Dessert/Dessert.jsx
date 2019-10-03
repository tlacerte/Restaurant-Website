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
            <>
                <h1>Dessert</h1>
                <h2>Sweet Treats</h2> 
                    <ul>{composedSweetTreats}</ul>
            </>
        )
    }
}

export default Dessert