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
    // {
    //     path: '/about',
    //     name: 'About',
    //     controller: require('../routes/index')
    // },
    // {
    //     path: '/services',
    //     name: 'Services',
    //     controller: require('../routes/index')
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     controller: require('../routes/index')
    // }
];