//- Routes.js
//- Joel Murphy
//- https://joelfmurphy.herokuapp.com/
//- Contains which paths are used and what controllers. Keeps the app.js less cluttered.

module.exports = [
    {
        path: '/',
        name: 'Index',
        controller: require('../routes/index')
    },
    {
        path: '/works',
        name: 'Works',
        controller: require('../routes/works')
    }
];