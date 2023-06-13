// export interface GameBoardProps {
//
// }

import { useTicTacToe } from '../hooks/useTicTacToe';
import { BoardCell } from '../types';

export const GameBoard = () => {
  const { handleCellClick, resetGame, gameState, TURNS } = useTicTacToe();

  return (
    <>
      <div className="game-board">
        {gameState.board.map((cellValue: BoardCell, cellIndex: number) => {
          return (
            <div className="cell" onClick={() => handleCellClick(cellIndex)}>
              {cellValue && cellValue}
            </div>
          );
        })}
      </div>

        <div className="game-info">
          <div className={`turn-info ${gameState.currentPlayer === TURNS.X && 'selected'}`}>
            <p>{TURNS.X}</p>
          </div>
          <div className={`turn-info ${gameState.currentPlayer === TURNS.O && 'selected'}`}>
            <p>{TURNS.O}</p>
          </div>
        </div>
      {gameState.winner && (
        <div className="game-winner">
          <p>{`GANADOR --> ${gameState.winner}`}</p>
          <button onClick={() => resetGame()}>¡Otra Vez!</button>
        </div>
      )}
    </>
  );
};
