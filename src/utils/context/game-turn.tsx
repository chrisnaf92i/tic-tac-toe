import { createContext, ReactNode, useState } from 'react';

export const GameTurnContext = createContext<{
    gameTurn: 'cross' | 'circle';
    setGameTurn: () => void;
    resetTurn: () => void;
}>({
    gameTurn: 'cross',
    setGameTurn: () => {},
    resetTurn: () => {},
});

export const GameTurnProvider = ({ children }: { children: ReactNode }) => {
    const [gameTurn, setGameTurn] = useState<'cross' | 'circle'>('cross');

    const handleChangeGameTurn = () => {
        switch (gameTurn) {
            case 'cross':
                setGameTurn('circle');
                break;
            case 'circle':
                setGameTurn('cross');
                break;
        }
    };

    const reset = () => {
        setGameTurn('cross');
    };

    return (
        <GameTurnContext.Provider
            value={{
                gameTurn,
                setGameTurn: handleChangeGameTurn,
                resetTurn: reset,
            }}
        >
            {children}
        </GameTurnContext.Provider>
    );
};
