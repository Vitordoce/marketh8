import React from "react";

const ProductPage = ({ params }) => {
  const { id } = params;

  if (!product) {
    return (
      <>
        <h3 className="font-bold text-sm md:text-base mb-1"></h3> not found
      </>
    );
  }

  return <>{id}</>;
};

export default ProductPage;
