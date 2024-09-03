const checkWin = (
    map: ('' | 'circle' | 'cross')[][],
    gameTurn: 'circle' | 'cross',
    setWinner: (gameTurn: 'circle' | 'cross') => void,
    l: number,
    c: number
) => {
    if (l == 0 && c == 0) {
        if (map[l + 1][c] === gameTurn && map[l + 2][c] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c + 1] === gameTurn && map[l][c + 2] === gameTurn) {
            setWinner(gameTurn);
        } else if (
            map[l + 1][c + 1] === gameTurn &&
            map[l + 2][c + 2] === gameTurn
        ) {
            setWinner(gameTurn);
        }
    } else if (l == 1 && c == 0) {
        // vérification si on pose un symbole au milieu à gauche
        if (map[l - 1][c] == gameTurn && map[l + 1][c] == gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c + 1] == gameTurn && map[l][c + 2] == gameTurn) {
            setWinner(gameTurn);
        }
    } else if (l == 2 && c == 0) {
        // vérification si on pose un symbole en bas à gauche

        if (map[l - 1][c] === gameTurn && map[l - 2][c] == gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c + 1] === gameTurn && map[l][c + 2] == gameTurn) {
            setWinner(gameTurn);
        } else if (
            map[l - 1][c + 1] === gameTurn &&
            map[l - 2][c + 2] == gameTurn
        ) {
            setWinner(gameTurn);
        }
    } else if (l == 2 && c == 1) {
        // vérification si on pose un symbole en bas à gauche
        if (map[l][c - 1] == gameTurn && map[l][c + 1] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l - 1][c] && map[l - 2][c]) {
            setWinner(gameTurn);
        }
    } else if (l == 2 && c == 2) {
        if (map[l - 1][c] === gameTurn && map[l - 2][c] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c - 1] === gameTurn && map[l][c - 2] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l - 1][c - 1] === gameTurn && map[l - 2][c - 2]) {
            setWinner(gameTurn);
        }
    } else if (l == 1 && c == 2) {
        if (map[l - 1][c] === gameTurn && map[l + 1][c] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c - 1] == gameTurn && map[l][c - 2] === gameTurn) {
            setWinner(gameTurn);
        }
    } else if (l == 0 && c == 2) {
        if (map[l + 1][c] === gameTurn && map[l + 2][c] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l][c - 1] === gameTurn && map[l][c - 2] === gameTurn) {
            setWinner(gameTurn);
        } else if (
            map[l + 1][c - 1] === gameTurn &&
            map[l + 2][l - 2] === gameTurn
        ) {
            setWinner(gameTurn);
        }
    } else if (l == 0 && c == 1) {
        if (map[l][c - 1] === gameTurn && map[l][c + 1] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l + 1][c] === gameTurn && map[l + 2][c] == gameTurn) {
            setWinner(gameTurn);
        }
    } else if (l == 1 && c == 1) {
        if (map[l - 1][c - 1] === gameTurn && map[l + 1][c + 1] === gameTurn) {
            setWinner(gameTurn);
        } else if (map[l - 1][c] === gameTurn && map[l + 1][c] === gameTurn) {
            setWinner(gameTurn);
        } else if (
            map[l - 1][c + 1] === gameTurn &&
            map[l + 1][c - 1] === gameTurn
        ) {
            setWinner(gameTurn);
        } else if (map[l][c - 1] === gameTurn && map[l][c + 1] === gameTurn) {
            setWinner(gameTurn);
        }
    }
};

export default checkWin;
