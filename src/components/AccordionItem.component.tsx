import { useState } from "react";
import Arrow from "./arrow-down.svg";

import "./Styles/Accordion.css";

type AccordionItemType = {
  title: string;
  description: string;
};

export const AccordionItem = ({ title, description }: AccordionItemType) => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  return (
    <div className="AccordionItem">
      <button
        className={`AccordionItemHeader ${isItemOpen ? "active" : ""}`}
        onClick={() => setIsItemOpen((val) => !val)}
      >
        <h3>{title}</h3>
        <img src={Arrow} alt={"text"} />
      </button>

      <div className={`AccordionItemDescription ${isItemOpen ? "active" : ""}`}>
        <div className="descriptionContent">{description}</div>
      </div>
    </div>
  );
};
