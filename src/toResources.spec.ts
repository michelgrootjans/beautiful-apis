import {Endpoint, toResource} from "./resource";

test('no path', () => {
  expect(toResource([])).toBeUndefined();
});

test('GET root path', () => {
  const root = toResource([
    new Endpoint("GET", "/")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: ["GET"]}
  );
  expect(root.dimensions()).toEqual({length: 1, height: 1})
});

test('GET+POST one path', () => {
  const root = toResource([
    new Endpoint("GET", "/"),
    new Endpoint("POST", "/")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: ["GET", "POST"]}
  );
  expect(root.dimensions()).toEqual({length: 1, height: 1})
});

test('GET one nested path', () => {
  const root = toResource([
    new Endpoint("GET", "/users")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: ["GET"]}
      ]},
  );
  expect(root.dimensions()).toEqual({length: 2, height: 1})
});

test('GET two paths', () => {
  const root = toResource([
    new Endpoint("GET", "/users"),
    new Endpoint("GET", "/products")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: ["GET"]},
        {name: 'products', verbs: ["GET"]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 2, height: 2})
});

test('GET nested resource', () => {
  const root = toResource([
    new Endpoint("GET", "/users/{id}")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: [], nested: [
            {name: '{id}', verbs: ["GET"]}
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 3, height: 1})
});

test('GET root and nested', () => {
  const root = toResource([
    new Endpoint("GET", "/"),
    new Endpoint("GET", "/users")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: ["GET"], nested: [
        {name: 'users', verbs: ["GET"]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 2, height: 1})
});

test('GET doublenested resource', () => {
  const root = toResource([
    new Endpoint("GET", "/users/{id}"),
    new Endpoint("GET", "/users/{email}"),
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: [], nested: [
            {name: '{id}', verbs: ["GET"]},
            {name: '{email}', verbs: ["GET"]},
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 3, height: 2})
});

test('GET parent/child resource', () => {
  let root = toResource([
    new Endpoint("GET", "/users"),
    new Endpoint("GET", "/users/{id}")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: ["GET"], nested: [
            {name: '{id}', verbs: ["GET"]}
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 3, height: 1})
});

test('GET doubly nested resource', () => {
  let root = toResource([
    new Endpoint("GET", "/users/{id}/orders")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: [], nested: [
            {name: '{id}', verbs: [], nested: [
                {name: 'orders', verbs: ["GET"]}
              ]}
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 4, height: 1})
});

test('multiple endpoints', () => {
  let root = toResource([
    new Endpoint("GET", "/users"),
    new Endpoint("POST", "/users"),
    new Endpoint("GET", "/users/{id}"),
    new Endpoint("GET", "/users/{id}/orders"),

    new Endpoint("GET", "/products"),
    new Endpoint("POST", "/products"),
    new Endpoint("GET", "/products/{id}"),
    new Endpoint("PUT", "/products/{id}"),
    new Endpoint("DELETE", "/products/{id}"),
    new Endpoint("GET", "/products/{id}/stats"),
    new Endpoint("GET", "/products/{id}/thumbnails"),
    new Endpoint("GET", "/products/{id}/reseller"),
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: ["GET", "POST"], nested: [
            {name: '{id}', verbs: ["GET"], nested: [
                {name: 'orders', verbs: ["GET"]}
              ]}
          ]},
        {name: 'products', verbs: ["GET", "POST"], nested: [
            {name: '{id}', verbs: ["GET", "PUT", "DELETE"], nested: [
                {name: 'stats', verbs: ["GET"]},
                {name: 'thumbnails', verbs: ["GET"]},
                {name: 'reseller', verbs: ["GET"]},
              ]}
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 4, height: 4})
});

test('GET parent.child resource', () => {
  let root = toResource([
    new Endpoint("GET", "/users"),
    new Endpoint("GET", "/users.{id}")
  ]);
  expect(root).toMatchObject(
    {name: '/', verbs: [], nested: [
        {name: 'users', verbs: ["GET"], nested: [
            {name: '{id}', verbs: ["GET"]}
          ]},
      ]},
  );
  expect(root.dimensions()).toEqual({length: 3, height: 1})
});
