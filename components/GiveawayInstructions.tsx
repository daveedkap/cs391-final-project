/*
 * GiveawayInstructions.tsx
 * Component: GiveawayInsctructions
 * Description:
 *   - Displays a brief description of how to enter the giveaway
 *   - Adds a toggleable read more button to show the full instructions or a less one to not overwhelm the user
 *
 * Author: Jenny Li
 * Reasoning:
 *   - Made to visually highlight each giveaway’s instructions using consistent styling and animations
 */

import styled from "styled-components";
import { useState } from "react";


/*
 * StyledSteps is a styled paragraph tag using styled-components.
 * We're adding a font-size, color, white-space. 
 */

const StyledSteps = styled.p`
    font-size: 0.9rem;
    color: #555;
    white-space: pre-wrap;
`;

/*
* StyledButton is a styled button tag using styled-components.
* We're adding a color, cursor, background, border, and hover effect.
*/
const StyledButton = styled.button`
 color: blue;
 cursor: "pointer";
 background: none; 
 border: none;
 &:hover {
    text-decoration: underline;
}
`;

/*
 * StyledHeading is a styled h3 tag using styled-components.
 * We're adding a font-size, color, font-weight, and margin.
 */
const StyledHeading = styled.h3`
    font-size: 1.2rem;
    color: black;
    font-weight: bold;
    margin: 0;
`;

/* DescBox is a styled div tag using styled-components.
* We're adding a border, padding, background color, and margin.
*/
const DescBox = styled.div`
    border: 2px solid #333;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.75rem 0;
    background-color: lightblue;
`;

/*
 * GiveawayDescription is the React functional component that receives the
 * instruction string as a prop and returns it inside a styled paragraph.
 * It also includes a button to toggle between showing the full instructions   
 * or a truncated version to avoid overwhelming the user with to much information. 
 */
export default function GiveawayInstructions({ instructions }: { instructions: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedInstructions = instructions.length > 70 ? instructions.slice(0, 70) + "...": instructions;

    return (
        <DescBox>
            <StyledSteps>
                <StyledHeading>How to Claim:</StyledHeading>
                <br />
                {isExpanded ? instructions : truncatedInstructions}
                <br />
                <StyledButton onClick={toggleReadMore}>
                    {isExpanded ? "Show Less" : "Read More"}
                </StyledButton>
            </StyledSteps>
        </DescBox>
    );
}

