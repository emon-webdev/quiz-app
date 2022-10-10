import React from "react";

const Topic = ({ topic }) => {
  const {  name, logo, total } = topic;
console.log(topic)
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div class="card-body flex-row justify-between">
          <h2 class="card-title">{name} <span>{total}</span></h2>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
