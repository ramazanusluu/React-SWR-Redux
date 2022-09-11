import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import useSWR from "swr";

function ProductDetails() {
  const { product } = useParams();
  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${product}`,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );
  if (error) return <div>failed to load, {error.message}</div>;
  if (!data) return <Loading />;

  console.log(data.Result.ProductList);
  console.log(data);
  return (
    <div>
      <ProductDetail data={data} />
    </div>
  );
}

export default ProductDetails;
