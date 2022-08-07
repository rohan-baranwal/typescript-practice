// Import stylesheets
import { fromEvent } from 'rxjs';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

fromEvent(appDiv, 'click').subscribe((res) => console.log(res));
