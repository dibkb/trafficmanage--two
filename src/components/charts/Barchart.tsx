import React, { FC, memo, useEffect, useMemo, useState } from "react";
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";
import dynamic from "next/dynamic";
const BarChartDynamic = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);
const Barchart: FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const data = [
    {
      name: "Jan",
      Violations: 4,
      "E-chalan": 2,
      amt: 2400,
    },
    {
      name: "Feb",
      Violations: 1,
      "E-chalan": 0,
      amt: 2210,
    },
    {
      name: "Mar",
      Violations: 0,
      "E-chalan": 0,
      amt: 2290,
    },
    {
      name: "Apr",
      Violations: 2,
      "E-chalan": 1,
      amt: 2000,
    },
    {
      name: "May",
      Violations: 0,
      "E-chalan": 0,
      amt: 2181,
    },
    {
      name: "Jun",
      Violations: 1,
      "E-chalan": 0,
      amt: 2500,
    },
    {
      name: "Jul",
      Violations: 3,
      "E-chalan": 2,
      amt: 2100,
    },
    {
      name: "Aug",
      Violations: 2,
      "E-chalan": 2,
      amt: 2100,
    },
    {
      name: "Oct",
      Violations: 4,
      "E-chalan": 0,
      amt: 2100,
    },
    {
      name: "Nov",
      Violations: 0,
      "E-chalan": 0,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="E-chalan" fill="#0284c7" />
        <Bar dataKey="Violations" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default memo(Barchart);
