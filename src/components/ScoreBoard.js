import React from 'react';
import styled from  'styled-components';

const ScoreBoard = props => {
    let percent = 0;

    if (props.clicks > 0) {
        percent = ((props.matches / props.clicks) * 100).toFixed(2);
    }

    return (
        <ScoreBoardWrapper>
            <Scores>
                <InfoBox>
                    Clicks: <br />{props.clicks}
                </InfoBox>
                <PercentageBox>
                    {percent}%
                </PercentageBox>
                <InfoBox>
                    Hits: <br />{props.matches}
                </InfoBox>
            </Scores>
        </ScoreBoardWrapper>
    );
}

export default ScoreBoard;

const ScoreBoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Scores = styled.div`
    max-width: 200px;
    display: flex;
    width: 100%;
`;

const InfoBox = styled.div`
    width: 30%;
    text-align: center;
`;

const PercentageBox = styled.div`
    width: 40%;
    text-align: center;
`