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
    border: 2px solid #333;
    border-radius: 12px;
    padding: .5rem;
    margin: 0.75rem 0;
    background-color: lightblue;
    text-align: center;
`;

/*
 * StyledTitle is a styled h2 using styled-components.
 * We're adding font size, weight, color, spacing, and margin.
 */
const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color:rgb(1, 8, 16);
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
