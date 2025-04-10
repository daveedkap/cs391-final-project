/*
 * GiveawayList.tsx
 * Component: GiveawayList
 * Description:
 *   - Maps through an array of giveaways and renders each using styled cards
 *   - Central display logic for the application
 *
 * Author: David Kaplansky
 * Reasoning:
 *   - Organizes all components into one clean UI layout
 */

import styled from "styled-components";
import { Giveaway } from "../interfaces/Giveaway";
import GiveawayTitle from "./GiveawayTitle";
import GiveawayThumbnail from "./GiveawayThumbnail";
import GiveawayDescription from "./GiveawayDescription";
import GiveawayInstructions from "./GiveawayInstructions";
import GiveawayLink from "./GiveawayLink";

/*
* Container is our styled-component version of a div tag. We're displaying them as a row, and using flex-wrap so if they
* don't fit in one line, they wrap to the next row. We're evenly spacing all of the cards, and using a nice lightblue color
* to align with the header
*/
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

/*
* Card is our styled div component for each of the individual cards or giveaways. We're displaying all their attributes
* vertically and aliging them centered. We're adding some margin and padding, and restricting the max-width to 30%. 
* We're aligning the text in the center and giving the card a border on the outside. 
*/
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: rgb(147, 177, 233);
    border-radius: 30px;
    width: 80%;
    text-align: center;
    border: 3px black solid;
    font: bold calc(2px + 1vw) "Times New Roman";
`;

/*
* The function GiveawayList renders a list of Giveaway cards given the giveaway data.
* We wrap the entire return in our Container styled component, and then map through each giveaway
* to display each one as a card using our 5 other React components.
*/
export default function GiveawayList({ giveaways }: { giveaways: Giveaway[] }) {
    return (
        <Container>
            {
                giveaways.map((g) =>
                    <Card key={g.id}>
                        <GiveawayThumbnail thumbnail={g.thumbnail} />
                        <GiveawayTitle title={g.title} />
                        <GiveawayDescription description={g.description} />
                        <GiveawayInstructions instructions={g.instructions} />
                        <GiveawayLink url={g.open_giveaway_url} />
                    </Card>
                )
            }
        </Container>
    );
}
