import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import PlayerCountSelection from "./components/PlayerCountSelection.tsx";

export default function App() {
  const [playerCount, setPlayerCount] = useState<number>();

  const handlePlayerCountSelection = (e: any) => {
    const element = e.target as HTMLButtonElement;
    const count = element.getAttribute("data-count");
    setPlayerCount(Number(count));
  };

  return (
    <>
      <NavBar title="BATTLESHIP" />
      <PlayerCountSelection handleSelection={handlePlayerCountSelection} />
    </>
  );
}
