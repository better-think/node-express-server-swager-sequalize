const Company = require('../models/company.model');
const { response } = require('express');
exports.getCompany = (req, res, next) => {
    return Company.findById(req.user.company_id).then(result => {
        if(result) {
            res.json({
                data: result
            });
        }
    }).catch(err => {
  	  return res.status(422).send({error: ''})
    });
}