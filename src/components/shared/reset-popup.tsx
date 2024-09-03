import Popup, { PopupTitle } from '../layout/popup';
import Button from './button';
import { useContext } from 'react';
import { GameMapContext } from '../../utils/context/game-map';

type PropsType = {
    onCancel: () => void;
};
export default function ResetPopup({ onCancel }: PropsType) {
    const { resetMap } = useContext(GameMapContext);
    return (
        <Popup>
            <PopupTitle>Restart Game ?</PopupTitle>
            <div>
                <Button
                    style={{ width: 'max-content', padding: '8px' }}
                    $type="useless"
                    onClick={onCancel}
                >
                    No, Cancel
                </Button>
                <Button
                    style={{ width: 'max-content', padding: '8px' }}
                    $type="reverse"
                    onClick={() => {
                        resetMap();
                        onCancel();
                    }}
                >
                    Yes Restart
                </Button>
            </div>
        </Popup>
    );
}
