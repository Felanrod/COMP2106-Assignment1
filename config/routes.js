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
    },
    {
        path: '/about',
        name: 'About',
        controller: require('../routes/about')
    },
    {
        path: '/services',
        name: 'Services',
        controller: require('../routes/services')
    },
    {
        path: '/contact',
        name: 'Contact',
        controller: require('../routes/contact')
    }
];