const uuid = require('uuid')
const path = require('path')
const { Device } = require('../models/models')
const ApiError = require('../error/apiError')

class deviceController { 
    async create(req, res, next) {
    try {
        const { name, price, IdBrand, IdType, info } = req.body
        const { img } = req.files 
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.create({ name, price, IdBrand, IdType, info, img: fileName })
        return res.json(device)
        
    } catch (e) {
        next(ApiError.badRequest(e.message))
        }
        
    }
     /* почему то бд не отдает значения, мб трабл в некоректной заполнености или неверном расположении ключей в моделе связей бд? Решить.
    async getAll(req,res) { 
        const {IdBrand, IdType} = req.query
        let devices;
        if(!IdBrand && !IdType) {
            devices = await Device.findAll()
        }
        if(IdBrand && !IdType) {
            devices = await Device.findAll({where: {IdBrand}})
        }
        if(!IdBrand && IdType) {
            devices = await Device.findAll({where: {IdType}})
        }
        if(IdBrand && IdType) {
            devices = await Device.findAll({where: {IdBrand, IdType}})
        }
         return res.json(devices)
    }
*/
    async getOne(req,res) { 

    }
    
    async check(req, res) { 
        res.send({message:'ALL WORKING!'})
    }
}

module.exports = new deviceController()
