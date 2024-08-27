import React, { useState } from 'react';
import './chess.css';

const Chess = () => {
    const initialBoard = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];

    const [board, setBoard] = useState(initialBoard);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [selectedPos, setSelectedPos] = useState(null);

    const handleSquareClick = (row, col) => {
        if (selectedPiece) {
            const newBoard = board.map(r => [...r]);
            newBoard[selectedPos.row][selectedPos.col] = '';
            newBoard[row][col] = selectedPiece;
            setBoard(newBoard);
            setSelectedPiece(null);
            setSelectedPos(null);
        } else if (board[row][col]) {
            setSelectedPiece(board[row][col]);
            setSelectedPos({ row, col });
        }
    };

    const renderPiece = (piece) => {
        const icons = {
            'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
            'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
        };
        return icons[piece] || '';
    };

    return (
        <div className="board">
            {board.map((row, i) =>
                row.map((piece, j) => {
                    const isBlack = (i + j) % 2 === 1;
                    return (
                        <div
                            key={`${i}_${j}`}
                            className={`square ${isBlack ? 'black' : 'white'}`}
                            onClick={() => handleSquareClick(i, j)}
                        >
                            {renderPiece(piece)}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Chess;
