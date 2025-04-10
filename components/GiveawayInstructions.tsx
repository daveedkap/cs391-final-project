import styled from "styled-components";

const Steps = styled.p`
    font-size: 0.9rem;
    color: #555;
    white-space: pre-wrap;
`;

export default function GiveawayInstructions({ instructions }: { instructions: string }) {
    return <Steps><strong>How to Claim:</strong><br />{instructions}</Steps>;
}
