const Company = require('../models/company.model');
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

exports.test = () => {
    console.log("qwertyuiop")
    return Company.findAll().then(response => {
        console.log("\n response ", response, "\n")
    })
} 
