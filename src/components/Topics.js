import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";

const Topics = () => {
  const topicsData = useLoaderData({});
  const topics = topicsData.data;

  console.log(topics);

  return (
    <div>
      <h2>Topics</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
