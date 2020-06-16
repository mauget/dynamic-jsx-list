import React from 'react';
import styled from 'styled-components';

const StyledParaGraph = styled.p`
    padding-left: 1.0rem;
    padding-right: 1.0rem;
`;

export default function Paragraphs(props) {
    const {blurb} = {...props};

    return <>{String(blurb).split(/\n/).map(
        (string, index) => <StyledParaGraph key={index}>{string}</StyledParaGraph>)}</>;
}
