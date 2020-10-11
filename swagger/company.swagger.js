exports.getCompany = {
    tags: ['getCompany'],
    description: "Returns one Company from the system that the user has access to",
    operationId: 'getCompany',
    // security: [
    //     {
    //         bearerAuth: ["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZWJzdXBwb3J0QHBjc2VhdHRsZS5uZXQiLCJpYXQiOjE1OTY4MTcxMTU4NDgsImNvbXBhbnlfaWQiOjF9.FjjleHW_uLTmV5eTFW4zbA7529sOE7EXNFQv9kJg2Io"]
    //     }
    // ],
    "produces": [
        "application/json"
    ],
    "parameters": [
        {
            "name": "token",
            "in": "header",
            "required": true,
            "description": "access token can be generated using auth/login end point. <br/>ex: access_token = eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZWJzdXBwb3J0QHBjc2VhdHRsZS5uZXQiLCJpYXQiOjE1OTY3OTA1Mjg2MzQsImNvbXBhbnlfaWQiOjF9.rX3Wh5DkrKA96vVJqgWvlZkuQ2v0zWJY3WwfkyOcAH0",
            "type": "string"
        },
    ],
    "responses": {
              "201": {
                "description": "Successful operation",
                "schema": {
                  "$ref": "#/definitions/userResponse"
                }
              },
              "400": {
                "description": "Bad Request",
                "schema": {
                  "$ref": "#/definitions/errorModel400Feedback"
                }
              },
              "401": {
                "description": "Unauthorized",
                "schema": {
                  "$ref": "#/definitions/errorModel401"
                }
              },
              "404": {
                "description": "Not Found",
                "schema": {
                  "$ref": "#/definitions/errorModel404"
                }
              },
              "422": {
                "description": "Validation Error",
                "schema": {
                  "$ref": "#/definitions/errorModelValidationFeedback"
                }
              },
              "500": {
                "description": "Internal Server Error",
                "schema": {
                  "$ref": "#/definitions/errorModel500"
                }
              }
            }
} 