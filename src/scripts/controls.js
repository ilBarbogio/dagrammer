export const setupListeners=(element)=>{
  element.addEventListener("pointerdown",ev=>{
    console.log("POINTER DOWN")
    console.log(ev)
  })
}