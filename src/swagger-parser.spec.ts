import {promises as fsPromises} from 'fs';
import {parseEndpointsFrom} from "./swagger-parser";
import {Endpoint} from "./resource";

test('GET /users', async () => {
  const swagger = {
    "paths": {
      "/users": {
        "get": {}
      },
    }
  }
  expect(parseEndpointsFrom(swagger)).toMatchObject([
    new Endpoint("GET", "/users")
  ]);
});

test('GET /products', async () => {
  const swagger = {
    "paths": {
      "/products": {
        "get": {}
      },
    }
  }
  expect(parseEndpointsFrom(swagger)).toMatchObject([
    new Endpoint("GET", "/products")
  ]);
});

test('POST /users', async () => {
  const swagger = {
    "paths": {
      "/users": {
        "post": {}
      },
    }
  }
  expect(parseEndpointsFrom(swagger)).toMatchObject([
    new Endpoint("POST", "/users")
  ]);
});

test('examples/swagger.json', async () => {
  const fileContents = await asyncReadFile('./examples/swagger.json');
  const jsonContent = JSON.parse(fileContents);
  const api = parseEndpointsFrom(jsonContent);
});


async function asyncReadFile(filename: string) {
  try {
    return await fsPromises.readFile(filename, 'utf-8');
  } catch (err) {
    console.log(err);
  }
}
