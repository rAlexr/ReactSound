import CategoryTab from "components/categorytab";
import CategoryPage from "pages/categorypage";

import mobile from "shared/img/headphones-xx99-mark-two/mobile/preview.jpg";
import tablet from "shared/img/headphones-xx99-mark-two/tablet/preview.jpg";
import laptop from "shared/img/headphones-xx99-mark-two/desktop/preview.jpg";

const Headphones = () => {
  return (
    <CategoryPage categoryHeader={"headphones"}>
      <CategoryTab
        mobile={mobile}
        tablet={tablet}
        laptop={laptop}
        promo={"new product"}
        productTitle={"XX99 Mark II Headphones"}
        info={
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        }
        link={"/"}
      />

      <CategoryTab
        reverse={"reverse"}
        mobile={mobile}
        tablet={tablet}
        laptop={laptop}
        promo={"new product"}
        productTitle={"XX99 Mark II Headphones"}
        info={
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        }
        link={"/"}
      />

      <CategoryTab
        mobile={mobile}
        tablet={tablet}
        laptop={laptop}
        promo={"new product"}
        productTitle={"XX99 Mark II Headphones"}
        info={
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        }
        link={"/"}
      />
    </CategoryPage>
  );
};

export default Headphones;
