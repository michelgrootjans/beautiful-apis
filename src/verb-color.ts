const white = "rgb(255, 255, 255)";
const yellow = "rgb(255, 215, 0)";
const green = "rgb(0, 225, 0)";
const blue = "rgb(86, 203, 249)"; //56CBF9
const grey = "rgb(128, 128, 128)";
const black = "rgb(0, 0, 0)";
const red = "rgb(250, 126, 97)";

export class VerbColor {
  public text: string;
  public background: string;
  public textColor: string;

  constructor(text: string, textColor: string, background: string) {
    this.text = text
    this.background = background;
    this.textColor = textColor;
  }
}

export function verbColor(verb: string): VerbColor {
  switch (verb.toUpperCase()) {
    case 'GET':
      return new VerbColor("GET", black, green);
    case 'POST':
      return new VerbColor("POST", black, yellow);
    case 'PUT':
      return new VerbColor("PUT", black, blue);
    case 'PATCH':
      return new VerbColor("PTCH", white, grey);
    case 'DELETE':
      return new VerbColor("DEL", white, red);
  }
  return new VerbColor(verb.toUpperCase(), black, white);
}

