import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GameModProvider } from './utils/context/game-mod.tsx';
import { GameTurnProvider } from './utils/context/game-turn.tsx';
import GlobalStyles from './GlobalStyles.ts';
import GameMapProvider from './utils/context/game-map.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GameModProvider>
            <GameTurnProvider>
                <GameMapProvider>
                    <GlobalStyles />
                    <App />
                </GameMapProvider>
            </GameTurnProvider>
        </GameModProvider>
    </StrictMode>
);
