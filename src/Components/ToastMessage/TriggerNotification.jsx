export const TriggerNotification = ({ triggerNotification }) => {
  const handleButtonClick = (type = "success", message = "") => {
    triggerNotification({
      position: "top-right",
      type,
      message,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100px",
      }}
    >
      <button
        type="button"
        style={{
          border: "1px solid #eee",
          padding: "6px 12px",
          borderRadius: "8px",
          width: "auto",
          backgroundColor: "#159588",
          color: "white",
        }}
        onClick={() => {
          handleButtonClick("success", "File saved successFully");
        }}
      >
        Success
      </button>
      <button
        type="button"
        style={{
          border: "1px solid #eee",
          padding: "6px 12px",
          borderRadius: "8px",
          width: "auto",
          backgroundColor: "#d50000",
          color: "white",
        }}
        onClick={() => {
          handleButtonClick("error", "Falied to saved.");
        }}
      >
        Error
      </button>
    </div>
  );
};
