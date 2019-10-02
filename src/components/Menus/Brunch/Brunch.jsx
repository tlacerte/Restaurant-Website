import React, { Component } from 'react';
import BrunchItems from './BrunchItems'

import '../Menus.css'

class Brunch extends Component {
    state = {
        isShowing : false,
        specialty : [
            {
                item : "Bacon benedict",
                details : "on top of a biscuit",
                price : 10
            }
        ],
        omlettes : [
            {
                item : "Feta and gouda",
                details : "tomatoes, spinach, and red pepper",
                price : 12
            }
        ],
        sides : [
            {
                item : "Bacon",
                details : "2 strips",
                price : 3

            }
        ]
      }

    render(){
        const composedSpecialty = this.state.specialty.map((item, index) => {
            return (
                <BrunchItems
                    id={index} 
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedOmlettes = this.state.omlettes.map((item, index) => {
            return (
                <BrunchItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        const composedSides = this.state.sides.map((item, index) => {
            return (
                <BrunchItems 
                    id={index}
                    item={item.item}
                    details={item.details}
                    price={item.price}
                />
            )
          })
        return (
            <>
                <h1>Brunch</h1>
                <h2>Specialty</h2> 
                    <ul>{composedSpecialty}</ul>
                <h2>Omelettes</h2>
                    <ul>{composedOmlettes}</ul>
                <h2>Sides</h2>
                    <ul>{composedSides}</ul>
            </>
        )
    }
}

export default Brunch