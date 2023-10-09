const SecondBlock = ({ tags }) => {
  return (
    <div className="flex justify-between">
      {tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </div>
  );
};

export default SecondBlock;
