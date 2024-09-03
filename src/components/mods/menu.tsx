import Button from '../shared/button';
import styled from 'styled-components';

export default function Menu() {
    return (
        <Container className="menu">
            <div>
                pick player 1's mark
                <button className="btn-alpha"> X </button>
                remember : x goes first
            </div>

            <Button $type="cta"> New game (vs cpu) </Button>
            <Button $type="reverse"> New game (vs player) </Button>
        </Container>
    );
}

const Container = styled.article``;
