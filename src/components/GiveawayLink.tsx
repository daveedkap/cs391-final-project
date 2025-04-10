import styled from "styled-components";

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const LinkBox = styled.a`
    background-color: #ffcc00;
    padding: 0.75rem 1.25rem;
    border: 2px solid black;
    border-radius: 8px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
        background-color: #ffdb4d;
        transform: scale(1.05); 
    }
`;

export default function GiveawayLink({ url }: { url: string }) {
    return (
        <LinkWrapper>
            <LinkBox href={url} target="_blank" rel="noopener noreferrer">
                🎁 Claim This Giveaway
            </LinkBox>
        </LinkWrapper>
    );
}
