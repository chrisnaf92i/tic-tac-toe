import { ReactNode } from 'react';
import styled from 'styled-components';
import Colors from '../../utils/colors';

export default function Popup({ children }: { children: ReactNode }) {
    return (
        <BackgroundDark>
            <PopupStyled>{children}</PopupStyled>
        </BackgroundDark>
    );
}

const BackgroundDark = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const PopupStyled = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 35%;
    background: ${Colors.backgroundSecondary};
    box-sizing: content-box;
`;

export const PopupTitle = styled.h1`
    font-family: outfit;
    text-transform: uppercase;
    color: ${Colors.white};
    font-size: 40px;
    margin: 0;
`;
