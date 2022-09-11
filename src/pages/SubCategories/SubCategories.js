import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";
import useSWR from "swr";

function SubCategories() {
  const { category_id } = useParams();
  const { data, error } = useSWR(
    `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${category_id}`,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );
  if (error) return <div>failed to load, {error.message}</div>;
  if (!data) return <Loading />;
  console.log(data);
  console.log(data);
  console.log(data.Result.TopCategory.SubCategoryList);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">{data.Result.CategoryName}</h5>
          {data.Result.TopCategory.SubCategoryList.map((item, key) => (
            <SubCategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SubCategories;
