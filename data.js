import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const foodData = [
    {
        food: "Veg Pizza",
        image: "Veg Pizza.png",
        ingredients: "Roasted red peppers, Baby spinach, Onions, Mushrooms",
        cost: 14,
        uuid: uuidv4() 
    },
    {
        food: "Mexican Burger",
        image: "Mexican Burger.jpg",
        ingredients: "ground beef/beef mince with breadcrumbs and egg and flavorings",
        cost: 13,
        uuid: uuidv4()  
    },
    {
        food: "Chicken Pizza",
        image: "Chicken Pizza.jpg",
        ingredients: "flat bread, chillies, onion, garlic sauce and chunks of chicken",
        cost: 18,
        uuid: uuidv4() 
    },
    {
        food: "Chicken Shawarma",
        image: "chicken-shawarma.jpg",
        ingredients: "chicken breasts,chicken thighs/laps,Shawarma bread,cabbage,carrots",
        cost: 12,
        uuid: uuidv4() 
    },
    {
        food: "Veggie Sandwich",
        image: "Veggie Sandwich.jpg",
        ingredients: "whole-grain bread,hummus,cucumber,tomato,low-fat cheese",
        cost: 11,
        uuid: uuidv4() 
    }
]