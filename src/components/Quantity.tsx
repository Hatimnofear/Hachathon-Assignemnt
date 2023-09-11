"use client"
import React, {useState} from 'react'
 
const Quantity = () => 
{
    const [num, setNum] =  useState(1);

    return (
    <div className='flex gap-x-2 items-center'>
         {/*  Minus  */}
         <button className='border h-6 w-6 rounded-full center' onClick = {() => {  setNum(num <= 1 ? 1 : num - 1 )  }}> - </button>
         {/*  Numbers  */}
         <span className='text-[10px]'>{num}</span>
         {/*  Plus  */}
         <button className='border h-6 w-6 rounded-full center' onClick = {() => {  setNum( num + 1 )  }}> + </button>
    </div>
  );
};

export default Quantity


export const OperationButton = () => 
{   return 
            <div className='border h-6 w-6 rounded-full center'>-</div>
};