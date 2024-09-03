import { useContext, useState } from 'react';
import styled from 'styled-components';
import GameTiles from '../shared/game-tiles';
import { GameMapContext } from '../../utils/context/game-map';
import Colors from '../../utils/colors';
import { GameTurnContext } from '../../utils/context/game-turn';
import checkWin from '../../utils/game-function/check-win';
import WinPopup from '../shared/win-popup';

export default function Game() {
    const { map, changeTile, resetMap } = useContext(GameMapContext);
    const { gameTurn, resetTurn } = useContext(GameTurnContext);
    const [crossWinned, setCrossWinned] = useState<number>(0);
    const [circleWinned, setCircleWinned] = useState<number>(0);
    const [winner, setWinner] = useState<'' | 'cross' | 'circle'>('');

    return (
        <article>
            <GameContainer>
                {map.map((line, l) =>
                    line.map((value, c) => (
                        <GameTiles
                            value={value}
                            handleChange={() => {
                                changeTile(l, c);
                                checkWin(map, gameTurn, setWinner, l, c);
                            }}
                            key={c}
                        />
                    ))
                )}
            </GameContainer>

            <ScoreContainer>
                <ScoreBox $color={Colors.primaryA}>
                    <h2>Cross</h2>
                    <h1>{crossWinned}</h1>
                </ScoreBox>
                <ScoreBox $color={Colors.secondaryA}>
                    <h2>Circle</h2>
                    <h1>{circleWinned}</h1>
                </ScoreBox>
            </ScoreContainer>

            {winner !== '' && (
                <WinPopup
                    winner={winner}
                    onClose={() => {
                        resetTurn();
                        resetMap();
                        setWinner('');
                    }}
                    onContinue={() => {
                        switch (winner) {
                            case 'cross':
                                setCrossWinned(crossWinned + 1);
                                break;
                            case 'circle':
                                setCircleWinned(circleWinned + 1);
                                break;
                        }
                        resetTurn();
                        resetMap();
                        setWinner('');
                    }}
                />
            )}
        </article>
    );
}

const GameContainer = styled.article`
    display: grid;
    gap: 15px;
    margin-top: 16px;
    grid-template-columns: repeat(3, 1fr);
`;

const ScoreContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
    font-family: outfit;
`;

const ScoreBox = styled.div<{ $color: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: ${Colors.backgroundPrimary};
    background-color: ${({ $color }) => $color};
    border-radius: 10px;
    h1,
    h2 {
        margin: 0;
    }
`;
