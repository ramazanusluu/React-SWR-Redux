import React from "react";
import ImageGallery from "react-image-gallery";
import "./ProductDetail.css";

function ProductDetail({ data }) {
  const images = data.Result.ImageSetList[0].ImageList.map((url) => ({
    original: url.Path,
  }));
  const item = data.Result;
  return (
    <div>
      {/* <h1>Product Detail - {product}</h1> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-xl-6">
            <ImageGallery items={images} showThumbnails={true} />
          </div>
          <div className="col-xl-6">
            <div>
              <h1 className="">{item.DisplayName}</h1>
              <div className="fs-5 my-2">
                <i className="fa-solid fa-caret-right text-danger"></i>
                <span className="text-muted ms-3">
                  {item.VisibleAttributeList[0].DisplayName}
                </span>
              </div>
              <div className="fs-5 my-2">
                <i className="fa-solid fa-caret-right text-danger"></i>
                <span className="text-muted ms-3">
                  {item.VisibleAttributeList[1].DisplayName}
                </span>
              </div>
              <div className="fs-5 my-2">
                <i className="fa-solid fa-caret-right text-danger"></i>
                <span className="text-muted ms-3">
                  {item.VisibleAttributeList[2].DisplayName}
                </span>
              </div>
              <div className="fs-5 my-2">
                <i className="fa-solid fa-caret-right text-danger"></i>
                <span className="text-muted ms-3">
                  {item.VisibleAttributeList[3].DisplayName}
                </span>
              </div>
              <div className="fs-5 my-2">
                <i className="fa-solid fa-caret-right text-danger"></i>
                <span className="text-muted ms-3">
                  {item.VisibleAttributeList[4].DisplayName}
                </span>
              </div>
              <h2 className="text-danger my-5">
                {item.ActualPriceToShowOnScreen > 1000
                  ? item.ActualPriceToShowOnScreen / 1000
                  : item.ActualPriceToShowOnScreen}
                TL
              </h2>
              <button
                type="button"
                className="basket"
              >
                SEPETE EKLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
