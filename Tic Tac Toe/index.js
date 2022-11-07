const input = require('readline');

// Initialize reader
const reader = input.createInterface
({
    input: process.stdin,
    output: process.stdout
});

// Initialize board
let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], player = 1, ai = -1, winner = 0, moves = 0;

// Print board to console
function PrintBoard()
{
    console.clear();
    console.log('Tic Tac Toe');
    console.log('Player: X');
    console.log('AI: O');
    console.log('-----------------');
    for (let i = 0; i < 3; i++)
    {
        console.log('| ' + (board[i][0] === 1 ? 'X' : board[i][0] === -1 ? 'O' : ' ') + ' | ' + (board[i][1] === 1 ? 'X' : board[i][1] === -1 ? 'O' : ' ') + ' | ' + (board[i][2] === 1 ? 'X' : board[i][2] === -1 ? 'O' : ' ') + ' |');
        console.log('-----------------');
    }
}

// Check if there is a winner
function CheckWinner()
{
    // Check rows
    for (let i = 0; i < 3; i++)
    {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0)
        {
            // There is a winner
            winner = board[i][0];
            return true;
        }
        else if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0)
        {
            // There is a winner
            winner = board[0][i];
            return true;
        }
    }
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0)
    {
        // There is a winner
        winner = board[0][0];
        return true;
    }
    // Check other diagonal
    else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0)
    {
        // There is a winner
        winner = board[0][2];
        return true;
    }
    // No winner
    return false;
}

function CheckDraw()
{
    // Check if there are any moves left
    return moves === 9;
}

function CheckGameOver()
{
    // Check if there is a winner
    return CheckWinner() || CheckDraw();
}

function CheckValidMove(row, col)
{
    // Check if the move is valid
    return board[row][col] === 0;
}

function MakeMove(row, col, player)
{
    // Make move
    board[row][col] = player;
    moves++;
}

function UndoMove(row, col)
{
    // Undo move
    board[row][col] = 0;
    moves--;
}

function GetBestMove()
{
    // Get best move
    let bestScore = -Infinity;
    // Initialize best move
    let move = { row: -1, col: -1 };
    for (let i = 0; i < 3; i++)
    {
        // Loop through rows
        for (let j = 0; j < 3; j++)
        {
            // Loop through columns
            if (board[i][j] === 0)
            {
                // Make move
                MakeMove(i, j, ai);

                // Get score
                let score = Minimax(0, false);

                // Undo move
                UndoMove(i, j);
                if (score > bestScore)
                {
                    // Update best score
                    bestScore = score;

                    // Update best move
                    move.row = i;
                    move.col = j;
                }
            }
        }
    }
    return move;
}

function Minimax(depth, isMaximizing)
{
    // Check if game is over
    if (CheckWinner())
    {
        return ai;
    }
    // Check if game is a draw
    else if (CheckDraw())
    {
        return 0;
    }

    // Check if maximizing
    if (isMaximizing)
    {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                if (board[i][j] === 0)
                {

                    MakeMove(i, j, ai);
                    
                    let score = Minimax(depth + 1, false);

                    UndoMove(i, j);
                    // Update best score
                    bestScore = Math.max(score, bestScore);
                }
            }
        }

        return bestScore;
    }
    else
    {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                if (board[i][j] === 0)
                {
                    MakeMove(i, j, player);
                    let score = Minimax(depth + 1, true);
                    UndoMove(i, j);
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        // Return best score
        return bestScore;
    }
}

function PlayerMove()
{
    reader.question('Enter row: ', (row) =>
    {
        reader.question('Enter column: ', (col) =>
        {
            if (CheckValidMove(row, col))
            {
                MakeMove(row, col, player);
                if (CheckGameOver())
                {
                    PrintBoard();
                    if (CheckWinner())
                    {
                        console.log('Player wins!');
                    }
                    else
                    {
                        console.log('Draw!');
                    }
                    reader.close();
                }
                else
                {
                    PrintBoard();
                    AiMove();
                }
            }
            else
            {
                console.log('Invalid move!');
                PlayerMove();
            }
        });
    });
}

function AiMove()
{
    let move = GetBestMove();
    MakeMove(move.row, move.col, ai);
    if (CheckGameOver())
    {
        PrintBoard();
        if (CheckWinner())
        {
            console.log('AI wins!');
        }
        else
        {
            console.log('Draw!');
        }
        reader.close();
    }
    else
    {
        PrintBoard();
        PlayerMove();
    }
}

PrintBoard();
PlayerMove();
