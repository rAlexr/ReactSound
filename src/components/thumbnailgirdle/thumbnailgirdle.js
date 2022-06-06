import { Girdle } from "./thumbnailgirdle.style";

import ThumbNail from "components/thumbnail/thumbnail";

import headphones from "shared/img/thumbnail/thumbnail-headphones.png";
import speakers from "shared/img/thumbnail/thumbnail-speakers.png";
import earbuds from "shared/img/thumbnail/thumbnail-earphones.png";

const ThumbNailGirdle = () => {
    return(
        <Girdle>
            <ThumbNail link={'/'} img={headphones} header={'headphones'} paragraph={'shop'} svg={<svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>}/> 
            <ThumbNail link={'/'} img={speakers} header={'headphones'} paragraph={'shop'} svg={<svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>}/> 
            <ThumbNail link={'/'} img={earbuds} header={'headphones'} paragraph={'shop'} svg={<svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>}/> 
        </Girdle>
    );
}

export default ThumbNailGirdle;