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

export const Accordion = ({ singleItemExpanded = false }: AccordionType) => {
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
    const currentIndex = openSections.indexOf(sectionName);
    if (singleItemExpanded) {
      if (currentIndex !== -1) {
        setOpenSections([]);
      } else {
        setOpenSections([sectionName]);
      }
      return;
    }

    const newOpenSections = [...openSections];
    if (currentIndex !== -1) {
      newOpenSections.splice(currentIndex, 1);
    } else {
      newOpenSections.push(sectionName);
    }
    setOpenSections(newOpenSections);
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
