// capstone-frontend/src/components/Products/jsx

const Products = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  console.log(safeProducts);

  return (
    <section>
      {safeProducts.map((product) => (
        <section key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.images?.[0]?.url} width="100" height="100" />
        </section>
      ))}
    </section>
  );
};

export default Products;
