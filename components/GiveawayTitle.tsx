/*
 * GiveawayTitle.tsx
 * Component: GiveawayTitle
 * Description:
 *   - Displays the title of a giveaway
 *   - Wraps the title in a styled, rounded box to improve visual hierarchy
 *
 * Author: Dana Yim
 * Reasoning:
 *   - Made to ensure consistency and visual emphasis on giveaway headers
 *     Rounded borders and center alignment help make the title stand out
 */

import styled from "styled-components";

/*
 * TitleWrapper is a styled div using styled-components.
 * We're adding a border, background color, padding, border radius, and text alignment.
 */
const TitleWrapper = styled.div`
    border: 2px solid black;
    background-color: white;
    border-radius: 12px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    margin-top: 0.5rem;
`;

/*
 * StyledTitle is a styled h2 using styled-components.
 * We're adding font size, weight, color, spacing, and margin.
 */
const StyledTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #003366;
    letter-spacing: 0.5px;
    margin: 0;
`;

/*
 * GiveawayTitle is the React functional component that receives the
 * giveaway title string as a prop and returns it inside a styled wrapper.
 */
export default function GiveawayTitle({ title }: { title: string }) {
    return (
        <TitleWrapper>
            <StyledTitle>{title}</StyledTitle>
        </TitleWrapper>
    );
}
