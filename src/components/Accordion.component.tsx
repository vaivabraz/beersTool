import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem.component";
import "./Styles/Accordion.css";

type AccordionType = {
  data: AccordionItemType[];
  singleItemExpanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  /**
   * Allows to expand or collapse accordion sections from
   * outside of the component
   */
  controlSections?: { expand: boolean; updateAt: string | undefined };
  onChange?: () => void;
};

type AccordionItemType = {
  id: string;
  title: string;
  description: string;
};

export const Accordion = ({
  data,
  singleItemExpanded = false,
  defaultExpanded,
  disabled,
  controlSections,
}: AccordionType) => {
  const getAllSectionsList = () => {
    return defaultExpanded ? data.map((i) => i.title) : [];
  };
  const [openSections, setOpenSections] =
    useState<string[]>(getAllSectionsList);

  useEffect(() => {
    if (controlSections?.expand) {
      setOpenSections(getAllSectionsList());
    } else {
      setOpenSections([]);
    }
  }, [controlSections?.updateAt]);

  const handleOnSelect = (sectionName: string) => {
    if (disabled) return;
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
