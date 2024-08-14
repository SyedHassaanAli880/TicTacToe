import React,{useState} from 'react';
import Square from "./Square";
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const Board = () => {

    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn,setisXTurn] = useState(true);

    const HandleSquareClick = (index) =>
    {   
        const copyState = [...state];
        if(copyState[index] === null)
        {
          copyState[index] = isXTurn ? "X" : "O";
          setState(copyState);
          setisXTurn(!isXTurn);
        }
    }

    const CheckWinner = () =>
      {   
        const winnerLogic = 
        [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]

        for(let logic of winnerLogic)
        {
          const [a,b,c] = logic;
          
          if(state[a] !== null && state[a] === state[b] && state[b] === state[c])
            return state[a];
        }
         
        return false;
      }

    const winner = CheckWinner();

  return (
    <div className='board-container'>
    {winner ? <>{winner} won the game <button onClick={()=>{setState(Array(9).fill(null))}}>Play again</button> </> :
      ( <>
          <h3>Player { isXTurn ? "X" : "0"} turn</h3>
          <div className='board-row'>
          <Square onClick={()=>HandleSquareClick(0)} value = {state[0]} />
          <Square onClick={()=>HandleSquareClick(1)} value = {state[1]} />
          <Square onClick={()=>HandleSquareClick(2)} value = {state[2]} />
          </div>
          <div className='board-row'>
            <Square onClick={()=>HandleSquareClick(3)} value = {state[3]} />
            <Square onClick={()=>HandleSquareClick(4)} value = {state[4]} />
            <Square onClick={()=>HandleSquareClick(5)} value = {state[5]} />
          </div>
          <div className='board-row'>
            <Square onClick={()=>HandleSquareClick(6)} value = {state[6]} />
            <Square onClick={()=>HandleSquareClick(7)} value = {state[7]} />
            <Square onClick={()=>HandleSquareClick(8)} value = {state[8]} />
          </div>
        </>
      )
    }
    </div>
  )
}

export default Board
