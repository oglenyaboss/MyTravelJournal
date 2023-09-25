import Header from './Header';
import React from "react";
import Card from "./Card";
import Data from "./data";
import './App.css';

export default function App() {
    const cards = Data.map(function (item){
        return (
            <Card
                key={item.id}
                item={item}
            />

        )
    })
    return (
        <div className={"App"}>
            <Header/>
            <main>
                {cards}
            </main>
        </div>
    )
}