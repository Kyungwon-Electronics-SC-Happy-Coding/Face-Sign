const TagCard = ({ children }) => {
  return (
    <div className="h-[4.5rem] w-72 transition-all bg-white shadow-md hover:shadow-lg border-l-[6px] border-borderMint rounded-md">
      {children}
    </div>
  );
};

export default TagCard;
