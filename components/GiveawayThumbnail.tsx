/*
 * GiveawayThumbnail.tsx
 * Description:
 *   - Styles the image associated with the steam giveaway
 * Author: Meera Malhotra
 * Reasoning:
 *   - React component used to style the images associated w the giveaways to be centered and stand out in their divs
 */

import styled from "styled-components";

/*
* Styled image that's centered with a rounded black border. To allow for responsiveness, 
* when user shrinks screen, the image disappears so site is responsive.
*/

const Image = styled.img`
    width: 100%;
    max-width: 40vh;
    border-radius: 2vh;
    margin-bottom: 1rem;
    margin: auto;
    border-style: solid;
    border-width: 1vh;
    border-color: black;

    @media screen and (max-width: 900px) {
        display: none;
      }
`;

export default function GiveawayThumbnail({ thumbnail }: { thumbnail: string }) {
    return <Image src={thumbnail} alt="Giveaway Thumbnail" />;
}
