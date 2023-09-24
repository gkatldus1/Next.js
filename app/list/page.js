"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [num, changeNum] = useState(0);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((element, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} className="food-img" alt="" />
            <h4>{element} $40</h4>
            <span>{num}</span>
            <button
              onClick={() => {
                changeNum(num + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                changeNum(num - 1);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
