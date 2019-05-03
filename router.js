let contactRoutes= require('./routes/contactRoutes')
let contactGroupRoutes= require('./routes/contactGroupRoutes')

module.exports = (route) => {
  route.use("/api/contacts", contactRoutes)
  route.use("/api/contactgroups", contactGroupRoutes)
}