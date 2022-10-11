import React, { useContext } from "react";
import { TopicContext } from "../Root";
import Topic from "./Topic";

const Home = () => {
  const topicsData = useContext(TopicContext);

  const topics = topicsData.data;
  return (
    <div>
      <div className="topics-head py-5 text-center flex items-center justify-center">
        <h2 className="text-4xl text-center text-blue-700 font-bold">Welcome to Quiz App</h2>
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
