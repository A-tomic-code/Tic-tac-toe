export interface GameState {
  board: Array<BoardCell>,
  winner: string | null
  currentPlayer: string
}

export type BoardCell = string | null
 