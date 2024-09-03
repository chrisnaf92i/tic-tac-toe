import { useContext, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../utils/colors';
import { GameModContext } from '../../utils/context/game-mod';
import { GameTurnContext } from '../../utils/context/game-turn';
import ResetPopup from '../shared/reset-popup';

export default function Header() {
    const { gameMod } = useContext(GameModContext);
    const { gameTurn } = useContext(GameTurnContext);
    const [resetPopupIsOpen, setResetPopupIsOpen] = useState<boolean>(false);
    return (
        <StyledHeader>
            <img
                src="images/logo.svg"
                alt="Logo tic tac toe"
                style={{ width: '64px' }}
            />
            {gameMod == 'Game' && (
                <>
                    <TurnContainer>
                        <Image
                            src={`
                                    images/${
                                        {
                                            cross: 'icon-x',
                                            circle: 'icon-o',
                                        }[gameTurn]
                                    }.svg                        
                                `}
                            style={{
                                marginRight: '8px',
                            }}
                        />
                        Turn
                    </TurnContainer>

                    <ResetButton
                        onClick={() => {
                            setResetPopupIsOpen(true);
                        }}
                    >
                        <Image src="images/icon-restart.svg" />
                    </ResetButton>

                    {resetPopupIsOpen && (
                        <ResetPopup
                            onCancel={() => {
                                setResetPopupIsOpen(false);
                            }}
                        />
                    )}
                </>
            )}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const ResetButton = styled.button`
    background-color: ${Colors.white};
    border: none;
    box-shadow: 0 5px ${Colors.grey};
    cursor: pointer;
    height: max-content;
    padding: 8px;
    border-radius: 8px;
`;

const TurnContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${Colors.backgroundSecondary};
    font-family: outfit;
    padding: 8px 16px;
    font-size: 24px;
    text-transform: uppercase;
    border-radius: 10px;
    color: ${Colors.white};
    box-shadow: 0px 8px #10212a;
`;

const Image = styled.img`
    width: 24px;
    height: auto;
`;
