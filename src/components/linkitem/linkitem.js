import { LinkTo } from "./linkitem.styled";

const LinkItem = ({ path, text = "" }) => {
  return <LinkTo to={path}>{text}</LinkTo>;
};

export default LinkItem;
