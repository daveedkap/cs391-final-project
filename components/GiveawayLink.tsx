/*
 * GiveawayLink.tsx
 * Component: GiveawayLink
 * Description:
 *   - Renders a styled button that links to the actual giveaway page
 *
 * Author: David Kaplansky
 * Reasoning:
 *   - Made to showcase the most important action item, that is claiming the giveaway
 */

import styled from "styled-components";

/*
* LinkWrapper is a styled div tag using styled-components which we're using to center the content and add a slighty margin.
*/
const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

/*
* LinkBox is a styled a tag with a green background color, padding, a solid black border, bolded text,
* and a cool transition into hovering which lightens the background color to pop out, and increases the size of the component.
*/
const LinkBox = styled.a`
    background-color:rgb(92, 202, 67);
    padding: 0.75rem 1.25rem;
    border: 2px solid black;
    border-radius: 8px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.25rem;
    transition: 0.2s;

    &:hover {
        background-color:rgb(86, 255, 77); 
        transform: scale(1.05); 
    }
`;

/*
* The function GiveawayLink is going to return the entire box for claiming the giveaway. 
* The text will be nested in between the LinkBox component, and the link itself will open in a new tab 
* using the target _blank attribute.
*/
export default function GiveawayLink({ url }: { url: string }) {
    return (
        <LinkWrapper>
            <LinkBox href={url} target="_blank">
                🎁 Claim This Giveaway
            </LinkBox>
        </LinkWrapper>
    );
}
