import React, { useContext } from "react";
import SectionHead from "../SectionHead/SectionHead";
import Product from "../../product_tab/product";
import { BsEye } from "react-icons/bs";
import Rating from "../../rating/Rating";
import { GlobalContext } from "../../../context";

const BestSelling = () => {
  const { products, getProducts } = useContext(GlobalContext);
  return (
    <div className="w-full flex flex-col gap-10">
      <SectionHead topic={"This Month"} label={"Best Selling Products"} />

      <div className="prod-con">
        {products &&
          products
            .slice(6, 11)
            .map((data, id) => (
              <Product
                key={id}
                prod_icon={<BsEye />}
                prod_rating={<Rating />}
                product={data}
                id={data.id}
                title={data.title}
                price={data.price}
                product_img={data.image}
                desc={data.title}
                isFyp={true}
                isWishlist={false}
              />
            ))}
      </div>
    </div>
  );
};

export default BestSelling;
