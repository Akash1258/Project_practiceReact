import "./notification.css";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const icon = {
  success: <AiOutlineCheck />,
  error: <AiOutlineClose />,
};

const messagePosition = (position, index) => {
  if (position === "top-right" || position === "top-left") {
    return { top: `${index * 50 + 10}px` };
  }
  if (position === "bottom-right" || position === "bottom-left") {
    return { bottom: `${index * 50 + 10}px` };
  }
};

export const Notification = ({
  position = "top-right",
  type = "success",
  message = "Hello from toast message",
  index,
}) => {
  console.log("index", index);
  return (
    <div
      className={`container ${type} ${position}`}
      style={messagePosition(position, index)}
    >
      {icon?.[type]}
      <div>{message}</div>
    </div>
  );
};
