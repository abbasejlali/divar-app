"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function StatisticsPage() {
  const data = [
    {
      name: "شش ماه اول سال 1402",
      ads: 1000,
      amt: 2400,
    },
    {
      name: "شش ماه دوم سال 1402",
      ads: 2000,
      amt: 2210,
    },
    {
      name: "شش ماه اول سال 1403",
      ads: 3000,
      amt: 2400,
    },
    {
      name: "شش ماه دوم سال 1403",
      ads: 4000,
      amt: 2210,
    },
  ];
  return (
    <div
      className="w-full my-40 mx-auto flex h-96 justify-center items-center "
      dir="ltr"
    >
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="ads"
            fill="black"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    // <div className="w-full my-40 mx-auto flex h-96 justify-center items-center ">
    //   <ResponsiveContainer>
    //     <BarChart data={data}>
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="name" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Bar dataKey="pv" fill="#8884d8" />
    //       <Bar dataKey="uv" fill="#82ca9d" />
    //     </BarChart>
    //   </ResponsiveContainer>
    // </div>
  );
}

export default StatisticsPage;
