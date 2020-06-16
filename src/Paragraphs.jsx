import React, {useMemo} from 'react';
import styled from 'styled-components';

const StyledParaGraph = styled.p`
    padding-left: 1.0rem;
    padding-right: 1.0rem;
`;

const paragraphs = (b) => String(b).split(/\n/).map(
    (string, index) => <StyledParaGraph key={index}>{string}</StyledParaGraph>);

export default function Paragraphs(props) {
    const {blurb} = {...props};
    const memoizedParagraphs = useMemo(() => paragraphs(blurb), [blurb]);
    return <>{memoizedParagraphs}</>;
}
