const {getCompany } = require('./company.swagger')

exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'this document is for Funding Trancker',
        termsOfService: 'not yet defined',
        contact: {
            name: 'Top coder',
            email: 'topcoder1208@gmail.com',
            url: 'https://gmail.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/',
            description: 'Local server'
        },
    ],
    components: { // How can you add authorization to Swagger?
        schemas: {},
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            },
            "Basic Authentication": {
                "type": "http",
                "scheme": "basic"
            },
            basicAuth:{
                type: "http",
                scheme: "basic"
            }
        },
        security: {
            basicAuth: [] 
        }
    },
    tags: [
        {
            name: 'company'
        }
    ],
    paths: {
        "/company": {
            "get": getCompany
        }
    }
}