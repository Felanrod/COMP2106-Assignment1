module.exports = [
    {
        path: '/',
        name: 'Index',
        controller: require('../routes/index')
    },
    {
        path: '/users',
        name: 'Users',
        controller: require('../routes/users')
    },
    {
        path: '/works',
        name: 'Works',
        controller: require('../routes/works')
    }
];