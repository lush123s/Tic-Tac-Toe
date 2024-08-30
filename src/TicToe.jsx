import React, { useRef, useState } from 'react'
import cirlce from '../src/circle.png'
import cross from '../src/cross.png'

let data  = ['','','','','','','','','']

const TicToe = () => {
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);
  const titleref = useRef()

  function reset(){
    setlock(false);
    data  = ['','','','','','','','','']
    titleref.current.innerHTML = 'Tic Tac Toe <span >Game</span>'
  }

  function toggle(e,num){
    console.log(e)
    if(lock){
      return 0;
    }
    if(count%2 === 0){
      e.target.innerHTML = `<img  src=${cross}>`;
      data[num] = 'x'
      setcount(count+ 1)
    }
    else{
      e.target.innerHTML = `<img  src=${cirlce}>`;
      data[num] = 'o'
      setcount(count+ 1)
    }
    checkWin()
    function checkWin(){
      if(data[0] === data[1] && data[1]=== data[2] && data[2]!==''){
       won(data)
      }
     else if(data[3] === data[4] && data[4]=== data[5] && data[5]!==''){
        won(data)
       }
       else if(data[6] === data[7] && data[7]=== data[8] && data[8]!==''){
        won(data)
       }
       else if(data[0] === data[3] && data[3]=== data[6] && data[6]!==''){
        won(data)
       }
       else if(data[2] === data[5] && data[5]=== data[8] && data[8]!==''){
        won(data)
       } 
       else if(data[0] === data[4] && data[4]=== data[8] && data[8]!==''){
        won(data)
       } 
       else if(data[0] === data[1] && data[1]=== data[2] && data[2]!==''){
        won(data)
       } 
       else if(data[2] === data[4] && data[4]=== data[6] && data[6]!==''){
        won(data)
       } 
    }
    function won(winner){
      setlock(true);
      if(winner === 'x'){
        titleref.current.innerHTML = `Congratulations!: Cross>`
      }
      else{
        titleref.current.innerHTML = `Congratulations!: Circle`
      }
    }
  }
  return (
   <div className="container  w-96 h-60 mt-16">
      <h1 ref={titleref} className='font-semibold text-5xl text-white text-center'>Tic Tac Toe <span className='text-[#26ffcb]'>Game</span></h1>
      <div className="borad p-5 mt-6">
    <div className="row1 mb-5 flex gap-3">
        <div onClick={function(e){toggle(e,0)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div onClick={function(e){toggle(e,1)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div onClick={function(e){toggle(e,2)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
    </div>
    <div className="row1 mb-5 flex gap-3">
        <div onClick={function(e){toggle(e,3)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div onClick={function(e){toggle(e,4)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div  onClick={function(e){toggle(e,5)}}className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
    </div>
    <div className="row1 flex gap-3">
        <div onClick={function(e){toggle(e,6)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div onClick={function(e){toggle(e,7)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
        <div onClick={function(e){toggle(e,8)}} className="box w-24 h-24 bg-slate-600 rounded-md flex items-center justify-center"></div>
    </div>
      </div>
      <div className="btn flex justify-center items-center">
      <button onClick={reset} className='py-2 px-5  bg-[#1f3540] text-white rounded-3xl font-semibold hover:bg-zinc-800'>Reset</button>
      </div>
   </div>
  )
}

export default TicToe
