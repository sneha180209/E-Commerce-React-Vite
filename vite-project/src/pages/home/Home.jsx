import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import BannerSecton from "../../components/bannersection/BannerSection";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Home() {
  const context = useContext(myContext);
  const { mode } = context;

  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [sortOption, setSortOption] = useState("lowToHigh");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const products = [
    {
      title: "Iphone 15",
      price: "150000",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692923780378",
      category: "Phone",
      description:
        "As part of our efforts to reach carbon neutrality by 2030, iPhone 15 and iPhone 15 Plus do not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.We encourage you to use any compatible USB‑C power adapter. If you need a new Apple power adapter or headphones, they are available for purchase.",
    },
    {
      title: "Boxy Fit Solid Casual Shirt",
      price: "500",
      imageUrl:
        "https://m.media-amazon.com/images/I/61wwLxKN6gL._UY679_.jpg",
      category: "Shirt",
      description:
        "Trendy and appealing, this shirt from FUNDAY FASHION exclusive collection will surely impress fashionable women. This shirt will surely add unique charm to your casual as well as party look. Made from soft fabric, this top will help you stay relaxed all day long. 100% Satisfaction is guaranteed. We Also manufacture shirts, t-shirts,tops for women Western, Casual, Formal, Stylish, latest tops for Women.",
    },
    {
      title: "ASUS VivoBook 15",
      price: "25500",
      imageUrl:
        "https://m.media-amazon.com/images/I/71kJlKb2r8L._SY450_.jpg",
      category: "Laptop",
      description:
        "The ASUS VivoBook 15 is good as a workstation. Its Intel 11th Gen CPU can handle some moderately heavy workloads; however, its integrated graphics and entry-level NVIDIA dedicated GPU aren't powerful enough for graphically demanding tasks like video editing or 3D animation.",
    },
    {
      title: "Coffee Mug Set",
      price: "99",
      imageUrl:
        "https://m.media-amazon.com/images/I/41+a5C1H++L._SX300_SY300_.jpg",
      category: "Cup",
      description:
        "Introducing the perfect cup for your morning or evening beverages - a tea and coffee cup set that is both stylish and practical. Each cup has a capacity of 180 ml, making it the perfect size for a single serving of your favorite hot drink. The inner layer of each cup is made of high-quality stainless steel, ensuring that your drink stays hot for longer periods of time."
    }
  ];

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const customSort = (a, b) => {
    if (sortOption === "lowToHigh") {
      return parseInt(a.price) - parseInt(b.price);
    } else if (sortOption === "highToLow") {
      return parseInt(b.price) - parseInt(a.price);
    }
  };

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        !categoryFilter || product.category === categoryFilter;

      const priceMatch =
        !priceFilter || parseInt(product.price) <= parseInt(priceFilter);

      const searchMatch =
        !searchKey ||
        product.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        product.description.toLowerCase().includes(searchKey.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    })
    .sort(customSort);

  return (
    <Layout>
      <BannerSecton/>
      <Filter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                addToCart={addToCartHandler}
              />
            ))}
          </div>
        </div>
      </section>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
