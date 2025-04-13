/*
 * GiveawayDescription.tsx
 * Component: GiveawayDescription
 * Description:
 *   - Displays a brief description of the giveaway inside a styled box
 *   - Adds an emoji and includes a fade-in animation on render
 *
 * Author: Isabella Teixeira
 * Reasoning:
 *   - Made to visually highlight each giveaway’s description using consistent styling and animations
 */

import styled, { keyframes } from "styled-components";

/*
 * fadeIn is a styled-components keyframe animation
 * that fades in the description from below
 */
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

/*
 * DescBox is a styled div tag using styled-components.
 * We're adding a border, padding, background color, and our fade-in animation.
 */
const DescBox = styled.div`
    border: 2px solid #333;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.75rem 0;
    background-color: lightblue;
    animation: ${fadeIn} 0.6s ease-in;
`;

/*
 * DescText is a styled paragraph that renders the giveaway description.
 * We're using centered text, improved line height, and an emoji prefix.
 */
const DescText = styled.p`
    font-size: 1rem;
    color: #333;
    text-align: center;
    line-height: 1.5;
    margin: 0;
`;

/*
 * GiveawayDescription is the React functional component that receives the
 * description string as a prop and returns it inside a styled paragraph.
 */
export default function GiveawayDescription({ description }: { description: string }) {
    return (
        <DescBox>
            <DescText>📝 {description}</DescText>
        </DescBox>
    );
}
