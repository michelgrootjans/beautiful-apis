import {Endpoint} from "./resource";

const validVerbs: string[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE'];

function isValidVerb(verb: string) {
  const upperCaseVerb = verb.toUpperCase();
  return validVerbs.includes(upperCaseVerb);
}

export function parseEndpointsFrom(swagger: any): Endpoint[] {
  const result: Endpoint[] = [];
  const paths = swagger.paths;
  for (const path in paths) {
    const verbs = paths[path];
    for (const verb in verbs) {
      if (isValidVerb(verb)) {
        result.push(new Endpoint(verb.toUpperCase(), path));
      }
    }
  }
  return result;
}

