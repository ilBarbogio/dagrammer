function getCoords(ev:PointerEvent|MouseEvent|TouchEvent,element:HTMLElement){
  const rect=element.getBoundingClientRect()
  if((ev as any).pointerType=="mouse") return [(ev as any).clientX-rect.left,(ev as any).clientY-rect.top]
  else{

  }
}

type pointerInfo={
  x:number|null,
  y:number|null
}
const pointers:pointerInfo[]=[
  {x:null,y:null},
  {x:null,y:null},
  {x:null,y:null}
]

export const setupListeners=(element:HTMLElement)=>{
  element.addEventListener("pointerdown",(ev:PointerEvent)=>{
    console.log("POINTER DOWN",ev)
   // const [x,y]=getCoords(ev,element)
    //console.log("START",x,y)
  })

  element.addEventListener("pointerup",(ev:PointerEvent)=>{
    console.log("POINTER UP")
    //const [x,y]=getCoords(ev,element)
    //if(x)console.log("END",x,y)
  })


  element.addEventListener("pointermove",(ev:PointerEvent)=>{
    console.log("POINTER MOVE")
    //const [x,y]=getCoords(ev,element)
    //console.log("MOVE",x,y)
  })
}
