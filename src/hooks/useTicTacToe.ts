import { useState } from "react"
import { BoardCell, GameState } from "../types"

const WINNER_COMBOS : Array<Array<number>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const useTicTacToe = () => {
  const TURNS = {X: 'X', O: 'O'}
  const initialState: GameState = {
    board: Array(9).fill(null),
    currentPlayer: TURNS.X,
    winner: null
  }
  const [gameState, setGameState] = useState<GameState>(initialState)
  
  const handleCellClick = (cellIndex: number) => {
    
    setGameState((prevStatus: GameState) => {
      const newBoard: BoardCell[] = [...prevStatus.board]
      let newTurn = prevStatus.currentPlayer      
      
      if(!prevStatus.board[cellIndex] && !prevStatus.winner){
        newBoard[cellIndex] = prevStatus.currentPlayer
        newTurn = prevStatus.currentPlayer === TURNS.X 
        ? TURNS.O 
        : TURNS.X
      }

      const newStatus: GameState = {
        ...prevStatus,
        board: newBoard,
        currentPlayer: newTurn,
        winner: checkWinner(newBoard)
      }
      
      return newStatus
    })

  }

  const checkWinner = (boardState:BoardCell[]) => {
    const board = boardState

    for(let i = 0; i < WINNER_COMBOS.length; i++){
      const [a, b, c] = WINNER_COMBOS[i]
      
      if(board[a] &&
         board[a] === board[b] &&
         board[a] === board[c]
      ){
        return board[a]
       }
    }

    return null
  }

  const resetGame = () => {
    setGameState(initialState)
  }

  return {handleCellClick, resetGame, gameState, TURNS}
}
