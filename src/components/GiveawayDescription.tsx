import styled from "styled-components";

const Desc = styled.p`
    font-size: 1rem;
    color: #333;
    margin: 0.75rem 0;
`;

export default function GiveawayDescription({ description }: { description: string }) {
    return <Desc>{description}</Desc>;
}
