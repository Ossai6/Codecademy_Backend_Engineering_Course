//CREATE AN ADDRESS OBJECT THAT HAS 3 PROPERTIES (city, street, zipcode) and a method showAddress(address)

// let address = {
//     street: 'Lasgidi',
//     city: 'Lagos',
//     zipcode: 11003,
// };

// function showAddress(address){
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);

//Create a blog post object with these properties (title, body, author, views, comments(with author and body properties), isLive)
let post = {
    title: 'About Me',
    body: '',
    author: 'Caleb',
    views: 895,
    comments: [
        {author: 'James', body: ''}
    ],
    isLive: true
};
console.log(post);