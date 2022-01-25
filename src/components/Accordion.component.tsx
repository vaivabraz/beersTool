import { useState } from "react";
import { AccordionItem } from "./AccordionItem.component";
import "./Styles/Accordion.css";

type AccordionType = {
  singleItemExpanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: () => void;
};

export const Accordion = ({}: AccordionType) => {
  const data = [
    { id: "1", title: "First", description: "asdasdasd so aweso mmksndf" },
    {
      id: "2",
      title: "Second",
      description:
        "asdasdasd so aweso so mmksndf  aweso mmksndf  mmksndf aweso mmksndf  aweso mmksndf  aweso mmksndf  so mmksndf  aweso mmksndf so mmksndf  aweso mmksndf ",
    },
    { id: "3", title: "Third", description: "asdasdasd so aweso mmksndf " },
  ];

  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleOnSelect = (sectionName: string) => {
    let newArr = [...openSections];
    const currentIndex = newArr.indexOf(sectionName);
    if (currentIndex !== -1) {
      newArr.splice(currentIndex, 1);
    } else {
      newArr.push(sectionName);
    }
    setOpenSections(newArr);
  };

  return (
    <div className="Accordion">
      {data.map((i) => (
        <AccordionItem
          key={i.id}
          sectionName={i.title}
          description={i.description}
          onSelect={handleOnSelect}
          expanded={openSections.indexOf(i.title) !== -1}
        />
      ))}
    </div>
  );
};
