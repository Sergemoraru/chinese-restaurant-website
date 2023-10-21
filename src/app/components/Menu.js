import React from "react";
import Image from "next/image";

const MenuPage = () => {
  return (
    <div className="bg-red-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-8">The Menu</h1>

      {/* Appetizers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Appetizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuItem
            title="Spring Rolls"
            image="/spring-rolls.jpeg"
            description="Crispy rolls stuffed with fresh veggies and served with a tangy sauce."
            price="$5.99"
          />
          <MenuItem
            title="Dim Sum Platter"
            image="/dim-sum.avif"
            description="An assortment of classic dim sum delights."
            price="$10.99"
          />
          <MenuItem
            title="Hot and Sour Soup"
            image="/hot-and-sour.jpeg"
            description="A flavorful blend of spices, tofu, and vegetables."
            price="$4.99"
          />
        </div>
      </section>

      {/* Entrees */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Entrees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuItem
            title="Kung Pao Chicken"
            image="/kung-pao.jpeg"
            description="Stir-fried chicken with peanuts, vegetables, and chili peppers."
            price="$14.99"
          />
          <MenuItem
            title="Beef and Broccoli"
            image="/beef-and-broccoli.jpeg"
            description="Tender beef stir-fried with fresh broccoli in a savory sauce."
            price="$15.99"
          />
          <MenuItem
            title="Vegetable Fried Rice"
            image="/vegetable-fried-rice.jpg"
            description="Classic fried rice with mixed vegetables."
            price="$10.99"
          />
        </div>
      </section>

      {/* Desserts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Desserts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuItem
            title="Mango Pudding"
            image="/mango-pudding.jpeg"
            description="Silky smooth mango pudding served with fresh mango slices."
            price="$6.99"
          />
          <MenuItem
            title="Sesame Balls"
            image="/sesame-balls.jpeg"
            description="Crispy fried glutinous rice balls coated with sesame seeds and filled with red bean paste."
            price="$5.99"
          />
        </div>
      </section>
    </div>
  );
};

const MenuItem = ({ title, image, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        height={100}
        width={100}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="font-bold">{price}</span>
    </div>
  );
};

export default MenuPage;
