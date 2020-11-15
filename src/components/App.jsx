import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

export default function App() {

    const navBarHeading = "List of Top 5 Netflix Series 2020";
    const webSeries = [
        {
            title: "Mr.Robot",
            imgUrl: "https://picsum.photos/200/300",
            content: 'Mr. Robot on Netflix'
        },
        {
            title: "Sacred Games",
            imgUrl: "https://picsum.photos/200/300",
            content: 'Sacred Games on Netflix'
        },
        {
            title: "Mirzapur",
            imgUrl: "https://picsum.photos/200/300",
            content: 'Mirzapur on Amazon Prime'
        },
        {
            title: "Family Man",
            imgUrl: "https://picsum.photos/200/300",
            content: 'Family Man on Amazon Prime'
        }
    ];
    return (
        <>
            <Navbar text={navBarHeading} />
            <Cards cards={webSeries} />
        </>
    );
}