require('dotenv').config()
const mongoose = require('mongoose')
const Role = require('../models/role/role')
const User = require('../models/user')

const seedAdmin = async () => {
  try{
    const db = process.env.DB_URL
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const adminRole = await Role.findOne({role: 'admin'})
    if (!adminRole) {
      console.log('Admin role not found')
      process.exit()
    }

    const addAdmin = new User({
      fullname: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      _idRole: adminRole._id
    })

    await addAdmin.save()

    console.log('Seed admin success')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

seedAdmin()