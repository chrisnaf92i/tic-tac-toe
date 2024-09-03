import { createContext, ReactNode, useContext, useState } from 'react';
import { GameTurnContext } from './game-turn';

export const GameMapContext = createContext<{
    map: ('' | 'circle' | 'cross')[][];
    changeTile: (l: number, c: number) => void;
    resetMap: () => void;
}>({
    map: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    changeTile: (l: number, c: number) => {},
    resetMap: () => {},
});

const GameMapProvider = ({ children }: { children: ReactNode }) => {
    const { gameTurn, setGameTurn } = useContext(GameTurnContext);
    const [map, setMap] = useState<('' | 'circle' | 'cross')[][]>([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const resetMap = () => {
        setMap([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
    };

    const changeTile = (l: number, c: number) => {
        let changedMap = map;

        if (changedMap[l][c] === '') {
            changedMap[l][c] = gameTurn;
            setMap(changedMap);
            setGameTurn();
        }
    };

    return (
        <GameMapContext.Provider
            value={{
                map,
                resetMap,
                changeTile,
            }}
        >
            {children}
        </GameMapContext.Provider>
    );
};

export default GameMapProvider;
