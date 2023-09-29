"use client";

import { useState } from "react";

export default function List() {
  let goods = ["Tomatoes", "Pasta", "Coconut"];
  let [nums, changeNum] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {goods.map((element, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} className="food-img" alt="" />
            <h4>{element} $40</h4>
            <span>{nums[index]}</span>
            <button
              onClick={() => {
                let copy = { ...nums };
                copy[index]++;
                changeNum(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = { ...nums };
                if (copy[index] == 0) {
                  alert("0이하로 설정할 수 없습니다!");
                  return;
                }

                copy[index]--;
                changeNum(copy);
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
