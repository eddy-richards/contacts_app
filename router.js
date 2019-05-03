let contactRoutes= require('./routes/contactRoutes')

module.exports = (route) => {
  route.use("/api/contacts", contactRoutes)
}