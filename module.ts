import { Drawer } from '@monorepo123321/drawer';
import { Rect, Elipse, Circle, Square } from '@monorepo123321/shapes'
import { calculateArea, calculatePerimeter } from '@monorepo123321/math';

const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');

const ctx = canvas.getContext('2d')!;

const i = canvas.getBoundingClientRect().width / 4;
const ar = [];

for (let j = 0; j < 4; j++) {
  ar.push(i * j);
}

const rect = new Rect(50, 20, ar[0], 100);
const circle = new Circle(10, ar[1], 100);
const elipse = new Elipse(10, 100, ar[2], 100);
const square = new Square(10, ar[3], 100);

const circle2 = new Circle(30, ar[2], 300);

const drawer = new Drawer(rect, ctx);
const drawer2 = new Drawer(elipse, ctx);
const drawer3 = new Drawer(circle, ctx);
const drawer4 = new Drawer(square, ctx);
const drawer5 = new Drawer(circle2, ctx);

drawer.drawRect();
drawer2.drawElipse();
drawer3.drawCircle();
drawer4.drawSquare();
drawer5.drawCircle();

console.log('Rect area:', calculateArea(rect));
console.log('Circle1 area:', calculateArea(circle));
console.log('Elipse area:', calculateArea(elipse));
console.log('Square area:', calculateArea(square));
console.log('Circle2 area:', calculateArea(circle2));
console.log('Rect perimeter:', calculatePerimeter(rect));
console.log('Circle1 perimeter:', calculatePerimeter(circle));
console.log('Elipse perimeter:', calculatePerimeter(elipse));
console.log('Square perimeter:', calculatePerimeter(square));
console.log('Circle2 perimeter:', calculatePerimeter(circle2));
console.log(square.name);
