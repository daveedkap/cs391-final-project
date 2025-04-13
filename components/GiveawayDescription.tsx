/*
 * GiveawayDescription.tsx
 * Component: GiveawayDescription
 * Description:
 *   - Displays a brief description of the giveaway in a styled paragraph
 *
 * Author: Isabella Teixeira
 * Reasoning:
 *   - Provides descriptions for each Giveaway
 */

import styled from "styled-components";

const Desc = styled.p`
    font-size: 1rem;
    color: #333;
    margin: 0.75rem 0;
    line-height: 1.5;
    text-align: center;
`;

export default function GiveawayDescription({ description }: { description: string }) {
    return <Desc>{description}</Desc>;
}
