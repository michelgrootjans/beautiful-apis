import yaml from 'js-yaml';
import {Resource, toResource} from "./resource";
import {parseEndpointsFrom} from "./swagger-parser";
import {ApiCanvas} from "./api-canvas";
import '../public/style.css';

const $input = document.getElementById('input') as HTMLTextAreaElement
const $drawButton = document.getElementById('draw')
const $fetchButton = document.getElementById('fetch')
const $error = document.getElementById('error')
const $canvas = document.getElementById('canvas') as HTMLCanvasElement

const apiCanvas = new ApiCanvas($canvas);

$fetchButton.addEventListener('click', async () => {
  try {
    $error.innerHTML = ''
    console.log('... fetching data')
    const text = (document.getElementById('url') as HTMLInputElement).value;
    const response = await fetch(text);
    const swaggerText = await response.text();
    $input.value = swaggerText;
    draw(swaggerText);
  } catch (e) {
    $error.innerHTML = e
  }
});

$drawButton.addEventListener('click', () => draw($input.value));

function draw(text: string) {
  try {
    $error.innerHTML = ''
    const swagger = parseSwagger(text);
    const endpoints = parseEndpointsFrom(swagger);
    const resource: Resource = toResource(endpoints);
    console.log('drawing', {resource})
    apiCanvas.drawTree(resource);
    remember(text, () => apiCanvas.drawTree(resource))
  } catch (e) {
    apiCanvas.clear();
    $error.innerHTML = e
  }
}

function parseSwagger(text: string) {
  if (text.trim().startsWith('{')) {
    console.log('... found json')
    return JSON.parse(text);
  }
  console.log('... found yaml')
  return yaml.load(text);
}

function remember(text: string, draw: () => void) {
  try {
    $error.innerHTML = ''
    const swagger = parseSwagger($input.value);
    const previous = document.getElementById('previous');
    const latest = document.createElement('li');
    latest.innerHTML = swagger?.info?.title + ' - ' + swagger?.info?.version;
    latest.addEventListener('click', () => {
      $input.value = text;
      draw();
    });
    previous.prepend(latest);
  } catch (e) {
    $error.innerHTML = e
  }
}
