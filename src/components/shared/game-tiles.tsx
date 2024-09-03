import styled from 'styled-components';
import Colors from '../../utils/colors';
import { useContext } from 'react';
import { GameTurnContext } from '../../utils/context/game-turn';

type PropsType = {
    value: 'cross' | 'circle' | '';
    handleChange: () => void;
};
export default function GameTiles({ value, handleChange }: PropsType) {
    const { gameTurn } = useContext(GameTurnContext);
    return (
        <StyledGameTiles
            onClick={handleChange}
            $turn={gameTurn}
            $tilesValue={value}
        >
            {
                {
                    cross: <img src="images/icon-x.svg" />,
                    circle: <img src="images/icon-o.svg" />,
                    '': <></>,
                }[value]
            }
        </StyledGameTiles>
    );
}

const StyledGameTiles = styled.button<{
    $turn: 'cross' | 'circle';
    $tilesValue: 'circle' | 'cross' | '';
}>`
    width: 100%;
    aspect-ratio: 1/1;
    background-color: ${Colors.backgroundSecondary};
    box-shadow: 0px 8px #10212a;
    border-radius: 15px;
    border: none;
    ${({ $tilesValue, $turn }) =>
        $tilesValue === '' &&
        `&:hover::after {
            content: url(
                ${
                    $turn === 'cross'
                        ? 'images/icon-x-outline.svg'
                        : 'images/icon-o-outline.svg'
                }
                });
        }`}
`;
