import _ from 'lodash/fp'
import {flow} from "lodash";

export class Resource{
  public readonly name: string;
  public readonly verbs: string[];
  public readonly nested: Resource[];

  constructor(name: string, verbs: string[], nested: Resource[]) {
    this.name = name;
    this.verbs = verbs;
    this.nested = nested;
  }

  height(): number {
    return this.nested.length === 0
      ? 1
      : this.nested.map(r => r.height()).reduce((acc, depth) => acc + depth, 0);
  }

  length(): number {
    return this.nested.length === 0
      ? 1
      : 1 + _.max(this.nested.map(n => n.length()));
  }

  dimensions(): {length: number, height: number} {
    return {length: this.length(), height: this.height()};
  }
}

export function toResource(endpoints: Endpoint[]): Resource {
  const verbsOf = (endpoints: Endpoint[]) => endpoints
    .map((ep: Endpoint): string => ep.verb);

  const toResources = (endpoints: Endpoint[]): Resource[] => _.flow(
    _.groupBy('root'),
    _.toPairs,
    _.map(([name, endpoints]) => {
      const [rootEndpoints, nestedEndpoints] = _.partition('isRoot', endpoints);
      const nestedResources = toResources(nestedEndpoints.map((endpoint: Endpoint) => endpoint.unwrap()));
      return new Resource(name, verbsOf(rootEndpoints), nestedResources);
    }),
  )(endpoints);

  return toResources(endpoints)[0];
}

export class Endpoint {
  public readonly root: string;
  public readonly verb: string;
  public readonly isRoot: boolean;
  public readonly tail: string[];

  constructor(verb: string, path: string) {
    this.verb = verb;
    const parts = _.split(/[\/|.]/, path); // split on '/' and on '.'
    this.root = _.head(parts) || '/'
    this.tail = _.compact(_.tail(parts))
    this.isRoot = this.tail.length === 0
  }

  unwrap(): Endpoint {
    return new Endpoint(this.verb, this.tail.join('/'));
  }
}