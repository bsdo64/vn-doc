exports.routes = {
  childRoutes: [ {
    path: '/',
    component: require('./components/app').App,
    // childRoutes: [
    //   require('./routes/Calendar'),
    //   require('./routes/Course'),
    //   require('./routes/Grades'),
    //   require('./routes/Messages'),
    //   require('./routes/Profile')
    // ]
  } ]
};