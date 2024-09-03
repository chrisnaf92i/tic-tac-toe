import Popup, { PopupTitle } from '../layout/popup';
import Button from './button';
import Colors from '../../utils/colors';

type PropsType = {
    winner: 'cross' | 'circle';
    onClose: () => void;
    onContinue: () => void;
};

export default function WinPopup({ winner, onClose, onContinue }: PropsType) {
    return (
        <Popup>
            <PopupTitle
                style={{
                    color: {
                        cross: Colors.primaryA,
                        circle: Colors.secondaryB,
                    }[winner],
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    src={`
                        images/icon-${
                            {
                                circle: 'o',
                                cross: 'x',
                            }[winner]
                        }.svg
                    `}
                    style={{
                        margin: '16px',
                    }}
                />
                Takes the round
            </PopupTitle>
            <div style={{ display: 'flex', width: '35%' }}>
                <Button
                    $type="useless"
                    onClick={onClose}
                    style={{ width: '50%' }}
                >
                    Quit
                </Button>
                <Button
                    $type="reverse"
                    onClick={onContinue}
                    style={{ width: '50%' }}
                >
                    Next Round
                </Button>
            </div>
        </Popup>
    );
}
