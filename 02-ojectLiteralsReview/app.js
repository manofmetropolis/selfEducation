//Objects are collections of properties (which is a key-value pair). Rather than using an index to access data, we use them custom keys. Let's do one.

const fitBitData = {
    totalSteps: 308000,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

const person = {
    firstName: 'Mariah',
    lastName: 'Carey',
    age: 51,
    birthplace: 'New York'
};

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

const midterms = {
    devin: 99,
    rob: 67,
    mark: 85
}

//Use dot notation to access and change values:
midterms.mark = 91;

//Same for adding stuff.
midterms.jack = 69;

//ARRAYS AND OBJECTS
//You can create a variable that contains an array that is full of objects, AND an objects can contain an array.

const mariahAlbums = [
    {
        title: 'Mariah Carey',
        releaseYear: 1990,
        singles: ['Vision of Love', 'I Don\'t Wanna Cry', 'Someday', 'Love Takes Time'],
        millionSales: 9
    },
    {
        title: 'Emotions',
        releaseYear: 1991,
        singles: ['Emotions', 'Can\'t Let Go', 'Make It Happen'],
        millionSales: 4
    },
    {
        title: 'Music Box',
        releaseYear: 1993,
        singles: ['Dreamlover', 'Hero', 'Without You', 'Anytime You Need A Friend'],
        millionSales: 10
    }
];