import LinkItem from "components/linkitem";

const LinkTab = () => {
  return (
    <div className="linktab">
      <LinkItem text={"home"} path={"/"} />
      <LinkItem text={"headphones"} path={"/"} />
      <LinkItem text={"speakers"} path={"/"} />
      <LinkItem text={"earphones"} path={"/"} />
    </div>
  );
};

export default LinkTab;
