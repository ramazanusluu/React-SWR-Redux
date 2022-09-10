import React from "react";
import Loading from "../../components/Loading/Loading";
import useSWR from "swr";
import axios from "axios";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Categories() {
  const { data, isValidating, error } = useSWR(
    "https://store.vrunibex.com/mobile2/mbProduct/CategoryList",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  console.log(data);
  console.log("isValidating", isValidating);
  //isValidating veriyi yakalama islemi devam ederken true tamamlandığında false olur.
  return (
    <div>
      <h1>Category List</h1>
    </div>
  );
}

export default Categories;
