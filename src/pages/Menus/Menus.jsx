import React, { Component } from 'react'
import MenuNav from '../../components/MenuNav/MenuNav';
import Dinner from '../../components/Menus/Dinner/Dinner';
import Lunch from '../../components/Menus/Lunch/Lunch';
import Dessert from '../../components/Menus/Dessert/Dessert';
import Brunch from '../../components/Menus/Brunch/Brunch';
import Beverages from '../../components/Menus/Beverages/Beverages';

class Menus extends Component {
    render(){
        return (
            <>
                <MenuNav />
                <hr/>
                <Dinner />
                <Lunch />
                <Dessert />
                <Brunch />
                <Beverages />
            </>
        )
    }
}

export default Menus