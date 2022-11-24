import {Position, PositionCalculator} from "./position";
import {verbColor} from "./verb-color";
import {Resource} from "./resource";

const black = "rgb(0, 0, 0)";

export class ApiCanvas {
  private readonly nodeSide = 12;

  private readonly edgeLength = 220;
  private readonly edgeHeight = 125;
  private readonly edgeFontSize = 24;
  private readonly edgeTextDistance = 20;

  private readonly verbDistance = 50;
  private readonly verbDiameter = 40;
  private readonly verbFontSize = 14;

  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  drawTree(resource: Resource) {
    this.clear();
    this.canvas.width = (resource.length() + 1) * this.edgeLength;
    this.canvas.height = (resource.height() + 1) * this.edgeHeight;

    this.drawResource(resource, new PositionCalculator(resource, {x: this.edgeLength, y: this.edgeHeight}));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawResource(resource: Resource, calculator: PositionCalculator) {
    const resourcePosition = calculator.positionOf(resource);
    this.drawNode(resourcePosition)
    this.drawVerbs(resourcePosition, resource.verbs);

    resource.nested.forEach((nested) => {
      const nestedPosition = calculator.positionOf(nested);
      this.drawEdge(resourcePosition, nestedPosition, nested.name)
      this.drawResource(nested, calculator);
    });
  }

  private drawNode(position: Position) {
    this.drawSquare(position, this.nodeSide);
  }

  private drawEdge(origin: Position, destination: Position, text: string) {
    this.elbowConnect(origin, destination);
    this.drawText(text, destination);
  }

  private drawVerbs(resourcePosition: Position, verbs: string[]) {
    const totalWidth = (verbs.length - 1) * this.verbDiameter
    let verbPosition = resourcePosition.up(this.verbDistance)
      .left(totalWidth / 2)

    for (const verbName of verbs) {
      this.drawVerb(resourcePosition, verbPosition, verbName);
      verbPosition = verbPosition.right(this.verbDiameter)
    }
  }

  private drawVerb(resourcePosition: Position, verbPosition: Position, text: string) {
    this.straightConnect(resourcePosition, verbPosition);
    this.drawBulb(text, verbPosition);
  }

  private drawText(text: string, position: Position) {
    this.ctx.font = this.edgeFontSize + "px arial";
    this.ctx.textAlign = "right"
    this.ctx.textBaseline = "bottom"
    this.ctx.fillText(text, position.x - this.edgeTextDistance, (position.y));
  }

  private drawBulb(text: string, verbPosition: Position) {
    const verb = verbColor(text)

    this.ctx.fillStyle = verb.background;
    this.ctx.beginPath();
    this.ctx.arc(verbPosition.x, verbPosition.y, this.verbDiameter / 2, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.fillStyle = black;
    this.ctx.stroke();

    this.ctx.fillStyle = verb.textColor;
    this.ctx.font = `bold ${this.verbFontSize}px sans-serif`;
    this.ctx.textAlign = "center"
    this.ctx.textBaseline = "middle"
    this.ctx.fillText(verb.text, verbPosition.x, verbPosition.y);
  }

  private straightConnect(resourcePosition: Position, verbPosition: Position) {
    this.ctx.beginPath();
    this.ctx.moveTo(resourcePosition.x, resourcePosition.y);
    this.ctx.lineTo(verbPosition.x, verbPosition.y);
    this.ctx.stroke();
  }

  private elbowConnect(origin: Position, destination: Position) {
    this.ctx.fillStyle = black;
    this.ctx.beginPath()
    this.ctx.moveTo(origin.x, origin.y);
    this.ctx.lineTo(origin.x, destination.y);
    this.ctx.lineTo(destination.x, destination.y);
    this.ctx.stroke()
  }

  private drawSquare(position: Position, side: number) {
    this.ctx.fillStyle = black;
    const halfSide = side / 2;
    this.ctx.fillRect(position.x - halfSide, position.y - halfSide, side, side);
  }
}

