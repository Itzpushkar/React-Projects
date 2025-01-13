const SearchBar = ({ SearchBarValue }) => {
  return (
    <div className=" flex justify-center items-center  h-[12.5%] w-[100%] mb-[15px]">
      <input
        type="text"
        value={SearchBarValue}
        className="text h-[98%] w-[94%] p-2 border-none outline-none rounded-lg text-[28px]"
        readOnly
      />
    </div>
  );
};

export default SearchBar;
