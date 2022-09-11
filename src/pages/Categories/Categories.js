import React from "react";
import Loading from "../../components/Loading/Loading";
import useSWR from "swr";

function Categories() {
  const { data, isValidating, error } = useSWR(
    "https://store.vrunibex.com/mobile2/mbProduct/CategoryList",
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );
  if (error) return <div>failed to load, {error.message}</div>;
  if (!data) return <Loading />;
  console.log(data);
  console.log("isValidating:", isValidating);
  //isValidating veriyi yakalama islemi devam ederken true tamamlandığında false olur.
  return (
    <div>
      <h1>Category List</h1>
    </div>
  );
}

export default Categories;
