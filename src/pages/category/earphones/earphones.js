import CategoryTab from "components/categorytab";
import CategoryPage from "pages/categorypage";

import mobileYX1 from "shared/img/earphones-yx1/mobile/preview.jpg";
import tabletYX1 from "shared/img/earphones-yx1/tablet/preview.jpg";
import laptopYX1 from "shared/img//earphones-yx1/desktop/preview.jpg";

const Earphones = () => {
  return (
    <CategoryPage categoryHeader={"earphones"}>
      <CategoryTab
        mobile={mobileYX1}
        tablet={tabletYX1}
        laptop={laptopYX1}
        promo={"new product"}
        productTitle={"YX1 WIRELESS EARPHONES"}
        info={
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        }
        link={"/"}
      />
    </CategoryPage>
  );
};

export default Earphones;
