"use client";
import React, { useEffect } from "react";
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
import Link from "next/link";
import { addApiDetails } from "@/ao_utils";

type ApiItem = {
  key: number;
  type: string;
  name: string;
  description: string;
  provider: string;
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
    type: "Data",
    name: "User Data API",
    description:
      "Provides access to user profile data, including personal information, preferences, and activity logs.",
    provider: "XYZ org",
    icon: "FaUser",
  },
  {
    key: 2,
    type: "Data",
    name: "Sales Data API",
    description:
      "Allows for the retrieval and analysis of sales data, including transactions, revenue, and customer purchase history.",
    provider: "XYZ org",
    icon: "FaChartLine",
  },
  {
    key: 3,
    type: "Data",
    name: "Inventory Data API",
    description:
      "Enables real-time tracking and management of inventory data, including stock levels, orders, and deliveries.",
    provider: "XYZ org",
    icon: "FaBoxes",
  },
  {
    key: 4,
    type: "Data",
    name: "Financial Data API",
    description:
      "Provides financial data such as account balances, transactions, investments, and market trends.",
    provider: "XYZ org",
    icon: "FaMoneyCheckAlt",
  },
  {
    key: 5,
    type: "Data",
    name: "Healthcare Data API",
    description:
      "Offers access to healthcare data, including patient records, medical history, treatment plans, and lab results.",
    provider: "XYZ org",
    icon: "FaHeartbeat",
  },
  {
    key: 6,
    type: "Data",
    name: "Geospatial Data API",
    description:
      "Delivers geospatial data for mapping, location services, and geographic analysis, including coordinates and boundaries.",
    provider: "XYZ org",
    icon: "FaMapMarkedAlt",
  },
  {
    key: 7,
    type: "Data",
    name: "IoT Device Data API",
    description:
      "Interfaces with IoT devices to gather and manage data from sensors, including temperature, humidity, and motion.",
    provider: "XYZ org",
    icon: "FaThermometerHalf",
  },
  {
    key: 8,
    type: "Data",
    name: "Social Media Data API",
    description:
      "Extracts and analyzes data from social media platforms, including posts, comments, likes, and user engagement.",
    provider: "XYZ org",
    icon: "FaShareAlt",
  },
  {
    key: 9,
    type: "Data",
    name: "E-commerce Data API",
    description:
      "Provides comprehensive e-commerce data including product details, pricing, reviews, and sales analytics.",
    provider: "XYZ org",
    icon: "FaShoppingCart",
  },
  {
    key: 10,
    type: "Data",
    name: "Weather Data API",
    description:
      "Supplies real-time and historical weather data for various locations, including temperature, precipitation, and forecasts.",
    provider: "XYZ org",
    icon: "FaCloudSun",
  },
];

export default function Features() {
  const router = useRouter();
  const handleApiNavigate = (id: number) => {
    router.push(`/market/${id}`);
  };

  return (
    <div className="min-h-screen bg-white relative py-20">
      <div className="flex flex-col gap-4 px-5 lg:px-20 lg:text-2xl font-medium mt-10">
        APIs
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 pt-10">
        {dataApis.map((f) => (
          <div
            onClick={() => handleApiNavigate(f.key)}
            key={f.key}
            className="bg-white hover:bg-[#f5f5f5] transition-all text-black p-6 flex flex-col gap-4 border-2 text-lg rounded-lg"
          >
            <div className="px-2 py-1 bg-slate-800 text-slate-700 bg-opacity-20 rounded w-fit">
              {f.type}
            </div>
            <div className="flex flex-row gap-4">
              <div>{iconMap[f.icon]}</div>
              <div className="flex flex-col gap-2">
                <div className="text-xl font-medium">{f.name}</div>
                <div className="w-80 line-clamp-2 text-base">
                  {f.description}
                </div>
                <Link
                  href=""
                  className="text-sm text-[#474747] hover:underline"
                >
                  By {f.provider}
                </Link>
              </div>
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
