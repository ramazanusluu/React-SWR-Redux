import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import useSWR from "swr";

function Products() {
  const { product_id } = useParams();
  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${product_id}`,
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
    <>
      <div className="container my-5">
        <div className="row">
          {data.Result.ProductList.map((item, key) => (
            <ProductCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
