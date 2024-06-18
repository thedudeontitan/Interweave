"use client";
import React from "react";
import {
  FaUser,
  FaChartLine,
  FaBoxes,
  FaMoneyCheckAlt,
  FaHeartbeat,
  FaMapMarkedAlt,
  FaThermometerHalf,
  FaShareAlt,
  FaShoppingCart,
  FaCloudSun,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

type ApiItem = {
  key: number;
  name: string;
  description: string;
  icon: string;
};

const iconMap: any = {
  FaUser: <FaUser className="text-5xl bg-black text-white p-2 rounded-full" />,
  FaChartLine: (
    <FaChartLine className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaBoxes: (
    <FaBoxes className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaMoneyCheckAlt: (
    <FaMoneyCheckAlt className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaHeartbeat: (
    <FaHeartbeat className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaMapMarkedAlt: (
    <FaMapMarkedAlt className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaThermometerHalf: (
    <FaThermometerHalf className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaShareAlt: (
    <FaShareAlt className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaShoppingCart: (
    <FaShoppingCart className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
  FaCloudSun: (
    <FaCloudSun className="text-5xl bg-black text-white p-2 rounded-full" />
  ),
};

const dataApis: ApiItem[] = [
  {
    key: 1,
    name: "User Data API",
    description:
      "Provides access to user profile data, including personal information, preferences, and activity logs.",
    icon: "FaUser",
  },
  {
    key: 2,
    name: "Sales Data API",
    description:
      "Allows for the retrieval and analysis of sales data, including transactions, revenue, and customer purchase history.",
    icon: "FaChartLine",
  },
  {
    key: 3,
    name: "Inventory Data API",
    description:
      "Enables real-time tracking and management of inventory data, including stock levels, orders, and deliveries.",
    icon: "FaBoxes",
  },
  {
    key: 4,
    name: "Financial Data API",
    description:
      "Provides financial data such as account balances, transactions, investments, and market trends.",
    icon: "FaMoneyCheckAlt",
  },
  {
    key: 5,
    name: "Healthcare Data API",
    description:
      "Offers access to healthcare data, including patient records, medical history, treatment plans, and lab results.",
    icon: "FaHeartbeat",
  },
  {
    key: 6,
    name: "Geospatial Data API",
    description:
      "Delivers geospatial data for mapping, location services, and geographic analysis, including coordinates and boundaries.",
    icon: "FaMapMarkedAlt",
  },
  {
    key: 7,
    name: "IoT Device Data API",
    description:
      "Interfaces with IoT devices to gather and manage data from sensors, including temperature, humidity, and motion.",
    icon: "FaThermometerHalf",
  },
  {
    key: 8,
    name: "Social Media Data API",
    description:
      "Extracts and analyzes data from social media platforms, including posts, comments, likes, and user engagement.",
    icon: "FaShareAlt",
  },
  {
    key: 9,
    name: "E-commerce Data API",
    description:
      "Provides comprehensive e-commerce data including product details, pricing, reviews, and sales analytics.",
    icon: "FaShoppingCart",
  },
  {
    key: 10,
    name: "Weather Data API",
    description:
      "Supplies real-time and historical weather data for various locations, including temperature, precipitation, and forecasts.",
    icon: "FaCloudSun",
  },
];

export default function Features() {
  const router = useRouter();
  const handleApiNavigate = (id: number) => {
    router.push(`/market/${id}`);
  };
  return (
    <div className="min-h-screen bg-white relative py-20" id="features">
      <div className="flex flex-col gap-4 px-5 lg:px-20 lg:text-2xl font-medium mt-10">
        APIs
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 pt-10">
        {dataApis.map((f) => (
          <div
            onClick={() => handleApiNavigate(f.key)}
            key={f.key}
            className="bg-white hover:bg-[#f5f5f5] transition-all text-black p-10 flex flex-row gap-4 border-2 text-lg rounded-lg"
          >
            <div>{iconMap[f.icon]}</div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-medium">{f.name}</div>
              <div className="w-80 line-clamp-2 text-base">{f.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="z-20 pointer-events-none absolute top-0 bottom-0 right-0 left-0">
        <div className="z-10 w-full h-full bg-repeat opacity-[0.10] bg-[url('../public/images/bg-noise2.png')]"></div>
      </div>
    </div>
  );
}
