import Arrow from "./arrow-down.svg";

import "./Styles/Accordion.css";

type AccordionItemType = {
  sectionName: string;
  description: string;
  expanded: boolean;
  onSelect: (sectionName: string) => void;
};

export const AccordionItem = ({
  sectionName,
  description,
  expanded,
  onSelect,
}: AccordionItemType) => {
  const handleOnSelect = () => {
    onSelect(sectionName);
  };
  return (
    <div className="AccordionItem">
      <button
        className={`AccordionItemHeader ${expanded ? "active" : ""}`}
        onClick={handleOnSelect}
      >
        <h3>{sectionName}</h3>
        <img src={Arrow} alt={"text"} />
      </button>

      <div className={`AccordionItemDescription ${expanded ? "active" : ""}`}>
        <div className="descriptionContent">{description}</div>
      </div>
    </div>
  );
};
