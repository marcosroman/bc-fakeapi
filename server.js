//import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker/locale/es');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users/new', (req, res) => {
  res.send(new Usuario)
})
app.get('/api/companies/new', (req, res) => {
  res.send(new Empresa)
})
app.get('/api/user/company', (req, res) => {
  res.send({...(new Usuario), ...(new Empresa)})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

class Usuario {
	constructor() {
		this._id = faker.datatype.uuid()
		this.primerNombre = faker.name.firstName()
		this.apellido = faker.name.lastName()
		this.nroTelefono = faker.phone.number()
		this.email = faker.internet.email()
		this.password = faker.internet.password()
	}
}

class Empresa {
	constructor() {
		this._id = faker.datatype.uuid()
		this.nombre = faker.company.name()
		this.direccion = {
			calle: faker.address.street(),
			ciudad: faker.address.city(),
			estado: faker.address.state(),
			codigoPostal: faker.address.zipCode(),
			pais: faker.address.country()
		}
	}
}

//console.log(new Usuario);
//console.log(new Empresa);
//console.log(faker.name.fullName());

