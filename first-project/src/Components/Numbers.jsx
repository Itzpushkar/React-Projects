const Numbers = ({ buttons, ClickFunction }) => {
  const chunkedButtons = [];
  for (let i = 0; i < buttons.length; i += 4) {
    chunkedButtons.push(buttons.slice(i, i + 4));
  }

  return (
    <div className="h-[85%] w-[98%] flex-col items-end justify-center justify-self-centerpt-[11.5px]">
      {chunkedButtons.map((chunk, rowIndex) => (
        <div
          className="flex justify-center gap-5 items-start mb-4"
          key={rowIndex}
        >
          {chunk.map((CalBtn) => (
            <button
              className="bg-[#ffffff] text-[#8e9a91] px-4 py-2 rounded-full shadow hover:bg-[#f2b70d] hover:text-white transition flex-row justify-center items-center text-[24px] h-[65px] w-[65px] "
              key={CalBtn}
              onClick={() => ClickFunction(CalBtn)}
            >
              {CalBtn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
