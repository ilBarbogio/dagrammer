import * as CTRL from "./scripts/controls"

const can:any=document.querySelector("#main-canvas")
const ctx=can.getContext("2d")

const width=400
const height=400

function setupCanvas(){
  can.width=width
  can.height=height
}


setupCanvas()
CTRL.setupListeners(can)