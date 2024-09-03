import styled from 'styled-components';
import Colors from '../../utils/colors';

const Button = styled.button<{ $type: 'cta' | 'reverse' | 'useless' }>`
    font-family: outfit;
    background-color: ${({ $type }) =>
        ({
            cta: Colors.primaryB,
            reverse: Colors.secondaryB,
            useless: Colors.grey,
        }[$type])};
    box-shadow: 0 8px
        ${({ $type }) =>
            ({
                cta: '#118C87',
                reverse: '#CC8B13',
                useless: '#6B8997',
            }[$type])};
    color: ${Colors.backgroundPrimary};
    border: none;
    width: 100%;
    padding: 8px;
    text-transform: uppercase;
    font-size: 24px;
    margin: 16px;
    border-radius: 8px;
    cursor: pointer;
`;

export default Button;
