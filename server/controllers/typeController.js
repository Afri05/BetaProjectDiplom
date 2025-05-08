const { Type } = require('../models/models')
const ApiError = require('../error/apiError')

class typeController { 
    async create(req,res) { 
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    
    async getAll(req,res) { 
        const types = await Type.findAll()
        return res.json(types)
    }
    
    async check(req, res) { 
        res.send({message:'ALL WORKING!'})
    }
}

module.exports = new typeController()
