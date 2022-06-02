const ProductCard = ({ product }) => {
  const { category, id, name } = product;

  return (
    <div className="productcard">
      <h1>{category}</h1>
      <h1>{name}</h1>
      <p>{id}</p>
    </div>
  );
};

export default ProductCard;
