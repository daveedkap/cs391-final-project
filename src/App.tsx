import styled from "styled-components";
import { useEffect, useState } from "react";
import { Giveaway } from "./interfaces/Giveaway";
import GiveawayList from "./components/GiveawayList";

const ParentDiv = styled.div`
  margin: auto;
  border: 5px black solid;
`;

const Header = styled.h1`
  text-align: center;
  background-color: lightblue;
  padding: 20px;
  margin: 0;
  font-weight: bold;
  border-bottom: 5px solid black;
`;

export default function App() {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);

  useEffect(() => {
    async function fetchGiveaways() {
      try {
        const response = await fetch(
          "https://corsproxy.io/?" +
          encodeURIComponent("https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity")
        );
        const data: Giveaway[] = await response.json();
        setGiveaways(data);
      } catch (e) {
        console.error("Failed to fetch giveaways:", e);
      }
    }

    fetchGiveaways();
  }, []);

  return (
    <ParentDiv>
      <Header>Top Steam Giveaways!</Header>
      <GiveawayList giveaways={giveaways} />
    </ParentDiv>
  );
}
