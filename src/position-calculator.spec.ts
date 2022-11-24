import {Resource} from "./resource";
import {Position, PositionCalculator} from "./position";

function resource(name: string, nested: Resource[] = []): Resource {
  return new Resource(name, ["GET"], nested);
}

test('users', () => {
  const users = resource('users');
  const calculator = new PositionCalculator(users);
  expect(calculator.positionOf(users)).toEqual(new Position(1, 1));
});

test('users, products', () => {
  const users = resource('users');
  const products = resource('products');
  const root = resource('root', [users, products]);
  const calculator = new PositionCalculator(root);
  expect(calculator.positionOf(root)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(users)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(products)).toEqual(new Position(2, 2));
});

test('users[nested]', () => {
  const nested = resource('nested');
  const users = resource('users', [nested]);
  const calculator = new PositionCalculator(users);
  expect(calculator.positionOf(users)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(nested)).toEqual(new Position(2, 1));
});

test('users[nested1[nested2]]', () => {
  const nested2 = resource('nested2');
  const nested1 = resource('nested1', [nested2]);
  const users = resource('users', [nested1]);
  const calculator = new PositionCalculator(users);
  expect(calculator.positionOf(users)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(nested1)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(nested2)).toEqual(new Position(3, 1));
});

test('users[nested1, nested2]', () => {
  const nested1 = resource('nested1');
  const nested2 = resource('nested2');
  const users = resource('users', [nested1, nested2]);
  const calculator = new PositionCalculator(users);
  expect(calculator.positionOf(users)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(nested1)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(nested2)).toEqual(new Position(2, 2));
});

test('users[nested1, nested2], products', () => {
  const nested1 = resource('nested1');
  const nested2 = resource('nested2');
  const users = resource('users', [nested1, nested2]);
  const products = resource('products', []);
  const root = resource('root', [users, products]);
  const calculator = new PositionCalculator(root);
  expect(calculator.positionOf(root)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(users)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(nested1)).toEqual(new Position(3, 1));
  expect(calculator.positionOf(nested2)).toEqual(new Position(3, 2));
  expect(calculator.positionOf(products)).toEqual(new Position(2, 3));
});

test('users[nested1, nested2, nested3]', () => {
  const nested1 = resource('nested1');
  const nested2 = resource('nested2');
  const nested3 = resource('nested3');
  const users = resource('users', [nested1, nested2, nested3]);
  const calculator = new PositionCalculator(users);
  expect(calculator.positionOf(users)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(nested1)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(nested2)).toEqual(new Position(2, 2));
  expect(calculator.positionOf(nested3)).toEqual(new Position(2, 3));
});

test('users[nested1, nested2, nested3], product', () => {
  const nested1 = resource('nested1');
  const nested2 = resource('nested2');
  const nested3 = resource('nested3');
  const users = resource('users', [nested1, nested2, nested3]);
  const products = resource('products', []);
  const root = resource('root', [users, products]);
  const calculator = new PositionCalculator(root);
  expect(calculator.positionOf(root)).toEqual(new Position(1, 1));
  expect(calculator.positionOf(users)).toEqual(new Position(2, 1));
  expect(calculator.positionOf(nested1)).toEqual(new Position(3, 1));
  expect(calculator.positionOf(nested2)).toEqual(new Position(3, 2));
  expect(calculator.positionOf(nested3)).toEqual(new Position(3, 3));
  expect(calculator.positionOf(products)).toEqual(new Position(2, 4));
});
