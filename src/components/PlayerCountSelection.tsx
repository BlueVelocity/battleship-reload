export default function PlayerCountSelection({
  handleSelection,
}: {
  handleSelection: Function;
}) {
  return (
    <div className="mt-32 text-white text-bold text-3xl font-header">
      <button
        className="mr-6 px-2 py-1 bg-secondary outline outline-white rounded active:bg-primary"
        data-count="1"
        name="Singleplayer"
        onClick={(e) => handleSelection(e)}
      >
        Singleplayer
      </button>
      <button
        className="px-2 py-1 bg-secondary outline outline-white rounded active:bg-primary"
        data-count="2"
        name="Multiplayer"
        onClick={(e) => handleSelection(e)}
      >
        Multiplayer
      </button>
    </div>
  );
}
