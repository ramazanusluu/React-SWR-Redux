import React from "react";
import Loading from "../../components/Loading/Loading";
import useSWR from "swr";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

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
      <div className="container my-5">
        <div className="row">
          {data.Result.TreeList.map(
            (item, key) =>
              item.ID < 11 && <CategoryCard key={key} item={item} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
