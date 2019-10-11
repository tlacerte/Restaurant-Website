import React, { Component } from 'react';
import BrunchItems from './BrunchItems'

import '../Menus.css'

class Brunch extends Component {
    state = {
        specialty : [
            {
                item : "Bacon benedict",
                details : "Pulled bacon, over easy egg, spicy hollandaise on top of a biscuit",
                price : 10
            },
            {
                item : "Belgium Waffle",
                details : "Topped with whipped cream and strawberries",
                price : 10
            },
            {
                item : "Cereal Pancakes",
                details : "Cinnomon Toast Crunch, Fruity Pebbles, or Frosted Flakes",
                price : 11

            },
            {
                item : "Austin Breakfast Tacos",
                details : "Eggs, bacon, potato, cheese, homemade salsa",
                price : 8

            },
            {
                item : "Breakfast Pizza",
                details : "Sunnyside up eggs, bacon, scallions, hollandaise",
                price : 14
            }
        ],
        omlettes : [
            {
                item : "Feta and gouda",
                details : "With tomatoes, spinach, and red pepper",
                price : 12
            },
            {
                item : "Healthy Option",
                details : "Egg whites, spinach, kale, sun dried tomatoes",
                price : 10
            },
            {
                item : "Make your own",
                details : "Options: feta, gouda, ricotta, goat cheese, sun dried tomatoes, spinach, kale, peppers, scallions, potato, salsa",
                price : 12
            }
        ],
        sides : [
            {
                item : "Bacon or Sausage",
                details : "2 pieces",
                price : 3
            },
            {
                item : "Biscuit",
                details : "Garlic butter sode",
                price : 4
            },
            {
                item : "Home Fries",
                details : "",
                price : 3
            },
            {
                item : "Seasonal Fruit",
                details : "",
                price : 5
            },
            {
                item : "Wheat or White Toast",
                details : "Jam and butter",
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
            <div className="full-menu">
                <h1>Brunch</h1>
                <h2>Specialty</h2> 
                    <ul>{composedSpecialty}</ul>
                <h2>Omelettes</h2>
                    <ul>{composedOmlettes}</ul>
                <h2>Sides</h2>
                    <ul>{composedSides}</ul>
            </div>
        )
    }
}

export default Brunch