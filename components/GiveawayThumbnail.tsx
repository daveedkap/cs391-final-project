import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    margin-bottom: 1rem;
    align-self: center;
`;

export default function GiveawayThumbnail({ thumbnail }: { thumbnail: string }) {
    return <Image src={thumbnail} alt="Giveaway Thumbnail" />;
}
