import { createContext, ReactNode, useState } from 'react';

export const GameModContext = createContext<{
    gameMod: 'Menu' | 'Game';
    setGameMod: () => void;
}>({
    gameMod: 'Menu',
    setGameMod: () => {},
});

export const GameModProvider = ({
    children: children,
}: {
    children: ReactNode;
}) => {
    const [gameMod, setGameMod] = useState<'Menu' | 'Game'>('Game');
    const handleChangeGameMod = () => {
        switch (gameMod) {
            case 'Menu':
                setGameMod('Game');
                break;
            case 'Game':
                setGameMod('Menu');
                break;
        }
    };
    return (
        <GameModContext.Provider
            value={{ gameMod, setGameMod: handleChangeGameMod }}
        >
            {children}
        </GameModContext.Provider>
    );
};
