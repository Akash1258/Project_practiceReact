// import { AccordianComp } from "./Components/Accordian/Accordian";
// import { FolderStrContainer } from "./Components/FolderStr/FolderStrContainer";
// import { ProductContainer } from "./Components/Pagination/ProductContainer";
import { TriggerNotification } from "./Components/ToastMessage/TriggerNotification";
import { useTriggerNotification } from "./Hooks/usetriggerNotification";

import "./styles.css";

export default function App() {
  const { triggerNotification, AlertBox } = useTriggerNotification();
  return (
    <div className="App">
      {/* <ProductContainer /> */}
      {/* <AccordianComp /> */}
      {/* <FolderStrContainer /> */}
      <TriggerNotification triggerNotification={triggerNotification} />
      {AlertBox}
    </div>
  );
}
