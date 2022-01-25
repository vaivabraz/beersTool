import Arrow from "./arrow-down.svg";
import "./Styles/Accordion.css";

type AccordionItemType<DataType> = {
  sectionName: string;
  sectionBodyText?: string;
  expanded: boolean;
  onSelect: (sectionName: string) => void;
  SectionBodyComponent?: any;
  data?: DataType;
};

//TODO: define available pairs of properties: SectionBodyComponent must be used with data prop,
// sectionBodyText can not be used with SectionBodyComponent
//TODO: SectionBodyComponent don't have a correct type

export function AccordionItem<T>({
  sectionName,
  sectionBodyText,
  expanded,
  onSelect,
  SectionBodyComponent,
  data,
}: AccordionItemType<T>) {
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
        {SectionBodyComponent ? (
          <SectionBodyComponent data={data} />
        ) : (
          <div className="descriptionContent">{sectionBodyText}</div>
        )}
      </div>
    </div>
  );
}
