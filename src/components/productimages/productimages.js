import { ImagesColOne, ImagesContainer, ProductImageMarketing } from "./productimages.styled";

import mobile1 from "shared/img/headphones-xx99-mark-two/mobile/image-gallery-1.jpg";
import mobile2 from "shared/img/headphones-xx99-mark-two/mobile/image-gallery-2.jpg";
import mobile3 from "shared/img/headphones-xx99-mark-two/mobile/image-gallery-3.jpg";



const ProductImages = () => {
    return(
        <ImagesContainer>
           <ImagesColOne>
               <ProductImageMarketing src={mobile1} />
               <ProductImageMarketing src={mobile2}/>
           </ImagesColOne>
           <ProductImageMarketing src={mobile3}/>
        </ImagesContainer>
        
    );
}

export default ProductImages;