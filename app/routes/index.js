module.exports = function(app, passport){
  // Configure Notes Router
  app.use('/notes', require('./notes'));
  // Configure Users Router
  app.use('/users', require('./users'));
}