import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    color: white;
    text-align: left;
    padding-left: 2.0rem;
    padding-right: 2.0rem;
`;

export default function ParagraphList(props) {
    const {blurb} = {...props};
    const paragraphs = String(blurb).split(/\n/);
    return <>{paragraphs.map((pgString, key) => <Paragraph key={key}>{pgString}</Paragraph>)}</>;
}
