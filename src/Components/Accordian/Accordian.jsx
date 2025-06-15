import { accordianData } from "./constant";
import "./accordian.css";
import { useState } from "react";

export const AccordianComp = () => {
  const [istoggled, setIsToggled] = useState("");

  const toogleHandler = (id) => {
    setIsToggled((perv) => {
      return perv === id ? "" : id;
    });
  };

  return !accordianData?.length ? <div>No items avilable</div>:  (
    <div className="accordian-cont">
      {accordianData?.map((item) => {
        return (
          <div
            className="accordian-card"
            key={item?.id}
            onClick={() => toogleHandler(item?.id)}
          >
            <div className="accordian-card-title">
              <div>{item?.title}</div>
              <div>
                {istoggled === item?.id ? <span>x</span> : <span>+</span>}
              </div>
            </div>
            <div className="accordian-card-content">
              {istoggled === item?.id ? <div>{item?.content}</div> : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
};
