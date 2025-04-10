import styled from "styled-components";

const Title = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`;

export default function GiveawayTitle({ title }: { title: string }) {
    return <Title>{title}</Title>;
}
