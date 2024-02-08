import { useCallback, useState } from "react"

function App() {
const [idx, setId]=useState(1);

const Orqa = useCallback((x)=>{
  if (x>1) {
    setId(x-1);
   }else{setId(30)}
}, [])
const  Oldi = useCallback((x)=>{
 if (x<30) {
  setId(x+1);
 }else{setId(1)}
}, [])


const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div className="flex flex-col w-full justify-center items-center h-[100vh] pt-[100px] bg-slate-300">
      <div className="p-10 border-double border-4 border-indigo-500 bg-slate-400 ">

      <div id="slide1" className="carousel-item relative w-[600px] h-[300px] rounded-md overflow-hidden">
    <img src={`https://picsum.photos/id/${idx+100}/200/300`}  className="w-full h-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a onClick={()=>Orqa(idx)}  className="btn btn-circle">❮</a> 
    
      <a onClick={()=>Oldi(idx)}  className="btn btn-circle">❯</a>
    </div>
    </div>
      <div  className="carousel  h-24 max-w-[600px]  bg-neutral p-2 rounded-box mt-5">
          {
            arr.map(a=>{
              return(
                <div className="carousel-item pl-1 cursor-pointer"  key={a}>
                          <img src={`https://picsum.photos/id/${a+100}/200/300`} onClick={()=>{setId(a)}} className="rounded-box"   alt="" />
                </div>
              )
            })
          }
      </div>
      </div>
    </div>
  )
}

export default App
