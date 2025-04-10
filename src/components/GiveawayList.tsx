import styled from "styled-components";
import { Giveaway } from "../interfaces/Giveaway";
import GiveawayTitle from "./GiveawayTitle";
import GiveawayThumbnail from "./GiveawayThumbnail";
import GiveawayDescription from "./GiveawayDescription";
import GiveawayInstructions from "./GiveawayInstructions";
import GiveawayLink from "./GiveawayLink";

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: rgb(115, 137, 177);
    border-radius: 10px;
    width: 80%;
    text-align: center;
    border: 3px black solid;
    font: bold calc(2px + 1vw) "Times New Roman";
`;

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
