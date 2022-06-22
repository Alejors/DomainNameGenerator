/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pro = ["el", "nuestro", "su", "tu"];
let adj = ["perfecto", "valiente", "hediondo", "horrible"];
let suj = ["desconocido", "amante", "cocinero", "profesor"];
let ext = [".com", ".io", ".net", ".us"];

window.onload = function() {
  for (let pron of pro) {
    for (let adjet of adj) {
      for (let sujet of suj) {
        for (let exts of ext) {
          let domain = [];
          domain.push(pron);
          domain.push(adjet);
          domain.push(sujet);
          domain.push(exts);
          console.log(domain.join(""));
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
