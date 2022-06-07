import ThumbNailGirdle from "components/thumbnailgirdle";
import { CategoryHeader, CategoryPadding } from "./categorypage.style";

const CategoryPage = ({ children, categoryHeader = "" }) => {
  return (
    <>
      <CategoryHeader>{categoryHeader}</CategoryHeader>
      {children}
      <CategoryPadding>
        <ThumbNailGirdle />
      </CategoryPadding>
    </>
  );
};

export default CategoryPage;
