import { useContext } from 'react';
import styled from 'styled-components';
import Colors from './utils/colors';
import Game from './components/mods/game';
import Menu from './components/mods/menu';
import Header from './components/layout/header';
import { GameModContext } from './utils/context/game-mod';

function App() {
    const { gameMod } = useContext(GameModContext);
    return (
        <Main>
            <ModContainer>
                <Header />
                {
                    {
                        Menu: <Menu />,
                        Game: <Game />,
                    }[gameMod]
                }
            </ModContainer>
        </Main>
    );
}

export default App;

const Main = styled.main`
    background-color: ${Colors.backgroundPrimary};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    color: ${Colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModContainer = styled.section`
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
`;
