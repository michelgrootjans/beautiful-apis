export const exampleSwagger = {
  "swagger": "2.0",
  "info": {
    "title": "dbaas",
    "version": "1.0.0"
  },
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/": {
      "get": {
        "operationId": "getVersions",
        "summary": "List versions",
        "description": "Lists information about all Database Service API versions.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"versions\": [\n        {\n            \"status\": \"CURRENT\",\n            \"updated\": \"2012-01-01T00:00:00Z\",\n            \"id\": \"v1.0\",\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0": {
      "get": {
        "operationId": "getVersionInfo",
        "summary": "Show version details",
        "description": "Shows details for the Database Service API v1.0.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {
              "application/json": "{\n    \"versions\": [\n        {\n            \"status\": \"CURRENT\",\n            \"updated\": \"2012-08-01T00:00:00Z\",\n            \"id\": \"v1.0\",\n            \"links\": [\n                {\n                    \"href\": \"http://23.253.228.211:8779/v1.0/\",\n                    \"rel\": \"self\"\n                }\n            ]\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/instances": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        }
      ],
      "post": {
        "operationId": "createInstance",
        "summary": "Create database instance",
        "description": "Creates a database instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"instance\": {\n        \"status\": \"BUILD\",\n        \"updated\": \"2012-01-25T21:53:10Z\",\n        \"name\": \"json_rack_instance\",\n        \"links\": [\n            {\n                \"href\": \"https://openstack.example.com/v1.0/1234/instances/dea5a2f7-3ec7-4496-adab-0abb5a42d635\",\n                \"rel\": \"self\"\n            },\n            {\n                \"href\": \"https://openstack.example.com/instances/dea5a2f7-3ec7-4496-adab-0abb5a42d635\",\n                \"rel\": \"bookmark\"\n            }\n        ],\n        \"created\": \"2012-01-25T21:53:09Z\",\n        \"hostname\": \"e09ad9a3f73309469cf1f43d11e79549caf9acf2.rackspaceclouddb.com\",\n        \"volume\": {\n            \"size\": 2\n        },\n        \"flavor\": {\n            \"id\": \"1\",\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/1\",\n                    \"rel\": \"bookmark\"\n                }\n            ]\n        },\n        \"id\": \"dea5a2f7-3ec7-4496-adab-0abb5a42d635\"\n    }\n}"
            }
          }
        }
      },
      "get": {
        "operationId": "getInstance",
        "summary": "List database instances",
        "description": "Lists information, including status, for all database instances.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"instances\": [\n        {\n            \"status\": \"ACTIVE\",\n            \"name\": \"json_rack_instance\",\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/instances/28d1b8f3-172a-4f6d-983d-36021508444a\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/instances/28d1b8f3-172a-4f6d-983d-36021508444a\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"volume\": {\n                \"size\": 2\n            },\n            \"flavor\": {\n                \"id\": \"1\",\n                \"links\": [\n                    {\n                        \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                        \"rel\": \"self\"\n                    },\n                    {\n                        \"href\": \"https://openstack.example.com/flavors/1\",\n                        \"rel\": \"bookmark\"\n                    }\n                ]\n            },\n            \"id\": \"28d1b8f3-172a-4f6d-983d-36021508444a\"\n        },\n        {\n            \"status\": \"ACTIVE\",\n            \"name\": \"xml_rack_instance\",\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/instances/8fb081af-f237-44f5-80cc-b46be1840ca9\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/instances/8fb081af-f237-44f5-80cc-b46be1840ca9\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"volume\": {\n                \"size\": 2\n            },\n            \"flavor\": {\n                \"id\": \"1\",\n                \"links\": [\n                    {\n                        \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                        \"rel\": \"self\"\n                    },\n                    {\n                        \"href\": \"https://openstack.example.com/flavors/1\",\n                        \"rel\": \"bookmark\"\n                    }\n                ]\n            },\n            \"id\": \"8fb081af-f237-44f5-80cc-b46be1840ca9\"\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        }
      ],
      "get": {
        "operationId": "getInstanceById",
        "summary": "Show database instance details",
        "description": "Shows database instance details.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"instance\": {\n        \"status\": \"ACTIVE\",\n        \"updated\": \"2012-03-28T21:34:25Z\",\n        \"name\": \"xml_rack_instance\",\n        \"links\": [\n            {\n                \"href\": \"https://openstack.example.com/v1.0/1234/instances/2450c73f-7805-4afe-a42c-4094ab42666b\",\n                \"rel\": \"self\"\n            },\n            {\n                \"href\": \"https://openstack.example.com/instances/2450c73f-7805-4afe-a42c-4094ab42666b\",\n                \"rel\": \"bookmark\"\n            }\n        ],\n        \"created\": \"2012-03-28T21:31:02Z\",\n        \"hostname\": \"e09ad9a3f73309469cf1f43d11e79549caf9acf2.rackspaceclouddb.com\",\n        \"volume\": {\n            \"used\": 0.124542236328125,\n            \"size\": 2\n        },\n        \"flavor\": {\n            \"id\": \"1\",\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/1\",\n                    \"rel\": \"bookmark\"\n                }\n            ]\n        },\n        \"id\": \"2450c73f-7805-4afe-a42c-4094ab42666b\"\n    }\n}"
            }
          }
        }
      },
      "delete": {
        "operationId": "deleteInstance",
        "summary": "Delete database instance",
        "description": "Deletes a specified database instance, including any associated data.\n",
        "produces": [],
        "responses": {
          "202": {
            "description": "202 response"
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/action": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        }
      ],
      "post": {
        "operationId": "restartInstance",
        "summary": "Restart instance",
        "description": "Restarts the database service on an instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {}
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/databases": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        }
      ],
      "post": {
        "operationId": "createDatabase",
        "summary": "Create database",
        "description": "Creates a database within a specified instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {}
          }
        }
      },
      "get": {
        "operationId": "getDatabases",
        "summary": "List instance databases",
        "description": "Lists databases for a specified instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"databases\": [\n        {\n            \"name\": \"anotherexampledb\"\n        },\n        {\n            \"name\": \"exampledb\"\n        },\n        {\n            \"name\": \"nextround\"\n        },\n        {\n            \"name\": \"sampledb\"\n        },\n        {\n            \"name\": \"testingdb\"\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/databases/{databaseName}": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        },
        {
          "name": "databaseName",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The name for the specified database.\n"
        }
      ],
      "delete": {
        "operationId": "deleteDatabase",
        "summary": "Delete database",
        "description": "Deletes a specified database.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {}
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/users": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        }
      ],
      "post": {
        "operationId": "createUser",
        "summary": "Create user",
        "description": "Creates a user for a specified database instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {}
          }
        }
      },
      "get": {
        "operationId": "getUsers",
        "summary": "List database instance users",
        "description": "Lists the users in a specified database instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"users\": [\n        {\n            \"name\": \"dbuser3\",\n            \"databases\": [\n                {\n                    \"name\": \"databaseA\"\n                }\n            ]\n        },\n        {\n            \"name\": \"dbuser4\",\n            \"databases\": [\n                {\n                    \"name\": \"databaseB\"\n                },\n                {\n                    \"name\": \"databaseC\"\n                }\n            ]\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/users/{name}": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        },
        {
          "name": "name",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The name for the specified user.\n"
        }
      ],
      "delete": {
        "operationId": "deleteUser",
        "summary": "Delete user",
        "description": "Deletes a specified user for a specified database instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "202": {
            "description": "202 response",
            "examples": {}
          }
        }
      }
    },
    "/v1.0/{accountId}/instances/{instanceId}/root": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "instanceId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The instance ID for the specified database instance.\n"
        }
      ],
      "post": {
        "operationId": "createRoot",
        "summary": "Enable root user",
        "description": "Enables the root user for a specified database instance and returns the root password.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"user\": {\n        \"password\": \"secretsecret\",\n        \"name\": \"root\"\n    }\n}"
            }
          }
        }
      },
      "get": {
        "operationId": "isRootEnabled",
        "summary": "Show root-enabled status for database instance",
        "description": "Shows root-enabled status for a database instance.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"rootEnabled\": true\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/flavors": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        }
      ],
      "get": {
        "operationId": "getFlavors",
        "summary": "List flavors",
        "description": "Lists information for all available flavors.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"flavors\": [\n        {\n            \"ram\": 512,\n            \"id\": 1,\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/1\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"name\": \"m1.tiny\"\n        },\n        {\n            \"ram\": 1024,\n            \"id\": 2,\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/2\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/2\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"name\": \"m1.small\"\n        },\n        {\n            \"ram\": 2048,\n            \"id\": 3,\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/3\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/3\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"name\": \"m1.medium\"\n        },\n        {\n            \"ram\": 4096,\n            \"id\": 4,\n            \"links\": [\n                {\n                    \"href\": \"https://openstack.example.com/v1.0/1234/flavors/4\",\n                    \"rel\": \"self\"\n                },\n                {\n                    \"href\": \"https://openstack.example.com/flavors/4\",\n                    \"rel\": \"bookmark\"\n                }\n            ],\n            \"name\": \"m1.large\"\n        }\n    ]\n}"
            }
          }
        }
      }
    },
    "/v1.0/{accountId}/flavors/{flavorId}": {
      "parameters": [
        {
          "name": "accountId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The account ID of the owner of the specified instance.\n"
        },
        {
          "name": "flavorId",
          "required": true,
          "in": "path",
          "type": "string",
          "description": "The flavor ID for the specified flavor.\n"
        }
      ],
      "get": {
        "operationId": "getFlavorById",
        "summary": "Show flavor details",
        "description": "Shows flavor details.\n",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "examples": {
              "application/json": "{\n    \"flavor\": {\n        \"ram\": 512,\n        \"id\": 1,\n        \"links\": [\n            {\n                \"href\": \"https://openstack.example.com/v1.0/1234/flavors/1\",\n                \"rel\": \"self\"\n            },\n            {\n                \"href\": \"https://openstack.example.com/flavors/1\",\n                \"rel\": \"bookmark\"\n            }\n        ],\n        \"name\": \"m1.tiny\"\n    }\n}"
            }
          }
        }
      }
    }
  }
}