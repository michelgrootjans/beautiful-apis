import {Resource} from "./resource";

export class Position {
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  right(delta: number = 1): Position {
    return new Position(this.x + delta, this.y);
  }

  left(delta: number = 1): Position {
    return new Position(this.x - delta, this.y);
  }

  up(delta: number) {
    return new Position(this.x, this.y - delta);
  }

  down(delta: number = 1) {
    return new Position(this.x, this.y + delta);
  }

  scale(xScale: number, yScale: number) {
    return new Position(this.x * xScale, this.y * yScale)
  }
}

export class PositionCalculator {
  private readonly positions: { resource: Resource, position: Position }[] = [];
  private readonly scale: { x: number; y: number };

  constructor(resource: Resource, scale: { x: number; y: number } = {x: 1, y: 1}) {
    this.scale = scale
    this.calculatePosition(resource, new Position(1, 1));
  }

  positionOf(resource: Resource) {
    const pair = this.positions.find(item => item.resource === resource);
    if (pair) return pair.position.scale(this.scale.x, this.scale.y)
    throw `Couldn't find ${resource.name}`
  }

  private calculatePosition(resource: Resource, currentPosition: Position) {
    this.positions.push({resource, position: currentPosition});
    this.calculatePositions(resource.nested, currentPosition.right())
  }

  private calculatePositions(resources: Resource[], startPosition: Position) {
    let currentPosition = startPosition;
    for (const resource of resources) {
      this.calculatePosition(resource, currentPosition);
      currentPosition = currentPosition.down(resource.height())
    }
  }
}
