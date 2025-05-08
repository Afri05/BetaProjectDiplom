const { Brand } = require("../models/models")

class brandController { 
    async create(req,res) { 
        const {name} = req.body
        const {brand} = await Brand.create({name})
        return res.json(brand)
    }
    
    async getAll(req,res) { 
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    
    async check(req, res) { 
        res.send({message:'ALL WORKING!'})
    }
}

module.exports = new brandController()
