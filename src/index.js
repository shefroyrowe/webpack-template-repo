import './styles.css';
import greeting from './greeting.js';
import odinImage from "./odin.png";

//console.log(greeting);

const demo = document.querySelector('.demo');
demo.textContent = `${greeting}`;
   
const image = document.createElement("img");
image.src = odinImage;
image.style.cssText = 'width: 30rem; height: 30rem;';
   
document.body.appendChild(image);
