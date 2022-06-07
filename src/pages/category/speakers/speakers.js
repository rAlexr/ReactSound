import CategoryTab from "components/categorytab";
import CategoryPage from "pages/categorypage";

import mobilezx7 from "shared/img/speaker-zx7/mobile/preview.jpg";
import tabletzx7 from "shared/img/speaker-zx7/tablet/preview.jpg";
import laptopzx7 from "shared/img//speaker-zx7/desktop/preview.jpg";

import mobilezx9 from "shared/img/speaker-zx9/mobile/preview.jpg";
import tabletzx9 from "shared/img/speaker-zx9/tablet/preview.jpg";
import laptopzx9 from "shared/img//speaker-zx9/desktop/preview.jpg";

const Speakers = () => {
  return (
    <CategoryPage categoryHeader={"speakers"}>
      <CategoryTab
        mobile={mobilezx7}
        tablet={tabletzx7}
        laptop={laptopzx7}
        promo={"new product"}
        productTitle={"ZX9 SPEAKER"}
        info={
          "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        link={"/"}
      />

      <CategoryTab
        reverse={"reverse"}
        mobile={mobilezx9}
        tablet={tabletzx9}
        laptop={laptopzx9}
        promo={"new product"}
        productTitle={"zx9 SPEAKER"}
        info={
          "Upgrade your sound system with the all new zx9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        link={"/"}
      />
    </CategoryPage>
  );
};

export default Speakers;
