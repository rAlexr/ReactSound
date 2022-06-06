import laptop from "shared/assets/shared/desktop/image-best-gear.jpg";
import tablet from "shared/assets/shared/tablet/image-best-gear.jpg";
import mobile from "shared/assets/shared/mobile/image-best-gear.jpg";

const MarketingBanner = () => {
  return (
    <div className="markeitngbanner">
      <picture className="special">
        <source srcset={`${laptop}`} media={'(min-width: 1024px)'} />
        <source srcset={`${tablet}`} media={'(min-width: 768px)'} />
        <source srcset={`${mobile}`} media={'(min-width: 300px)'} />

        <img src={mobile} alt={'speakers'} />
      </picture>

      <div className="markeitngbanner-text">
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default MarketingBanner;
