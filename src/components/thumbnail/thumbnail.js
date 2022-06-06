import {
  SvgContainer,
  ThumbContainer,
  ThumbHeader,
  ThumbImage,
  ThumbLink,
  ThumbWraper,
} from "./thumbnail.style";

const ThumbNail = ({
  img,
  header = undefined ? "" : "headphone",
  paragraph = undefined ? "" : "shop",
  svg,
  link
}) => {
  return (
    <ThumbContainer>
      <ThumbImage src={img} alt={"whatever"} />
      <ThumbHeader>{header}</ThumbHeader>
      <ThumbWraper>
        <ThumbLink to={link}>{paragraph}</ThumbLink>
        <SvgContainer>{svg}</SvgContainer>
      </ThumbWraper>
    </ThumbContainer>
  );
};

export default ThumbNail;
