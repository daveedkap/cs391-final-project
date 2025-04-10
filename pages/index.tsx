/*
 * index.tsx
 * Component: App
 * Description:
 *   - Root component that sets up the homepage
 *   - Fetches giveaway data from the GamerPower API
 *   - Passes the data down to GiveawayList for rendering
 *
 * Author: Everyone
 * Reasoning:
 *   - This page is responsible for initializing the application, making the API call, and rendering the list of giveaway cards.
 */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Giveaway } from "../interfaces/Giveaway";
import GiveawayList from "../components/GiveawayList";

/*
* Styled div component to wrap the whole app
*/
const ParentDiv = styled.div`
  margin: auto;
  border: 5px black solid;
`;

/*
* Styled header for our header/title. We're aligning the text in the center, using a lightblue color to match
* our body, and using bolded text with a solid black border below.
*/
const Header = styled.h1`
  text-align: center;
  background-color: lightblue;
  padding: 20px;
  margin: 0;
  font-weight: bold;
  border-bottom: 5px solid black;
`;

/*
* The App function is our main component for the app. 
*/
export default function App() {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]); // State the variable which will be used to store the array of giveaways from the API return
  const [isClient, setIsClient] = useState(false); // Boolean state to determine if we are on the client (avoids hydration issues)

  useEffect(() => {
    setIsClient(true); // Only render content once we're safely on the client
  }, []);

  useEffect(() => {
    async function fetchGiveaways() {
      try {
        const response = await fetch("/api/giveaways"); // Use our Next.js back-end for fetching API
        const data: Giveaway[] = await response.json();
        setGiveaways(data);
      } catch (e) {
        console.error("Failed to fetch giveaways:", e); // Catch error for incase we have an issue retrieving API data
      }
    }
    fetchGiveaways();
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch by rendering nothing on the server

  return ( // Pass our giveaway data to GiveawayList, and use our div and header styled components to wrap everything
    <ParentDiv>
      <Header>Top Steam Giveaways!</Header>
      <GiveawayList giveaways={giveaways} />
    </ParentDiv>
  );
}
