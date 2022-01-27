import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem.component";
import "./Styles/Accordion.css";

type AccordionType<DataType> = {
  data: DataType[];
  bodyComponent?: (data: any) => JSX.Element;
  singleItemExpanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  /**
   * Allows to expand or collapse accordion sections from
   * outside of the component
   */
  controlSections?: { expand: boolean; updateAt: string | undefined };
};

type BasicAccordionItemType = {
  id: number;
  name: string;
  description: string;
};
//TODO: accessibility!!!
export function Accordion<T extends BasicAccordionItemType>({
  data,
  singleItemExpanded = false,
  defaultExpanded,
  disabled,
  controlSections,
  bodyComponent,
}: AccordionType<T>) {
  const getAllSectionsList = () => {
    return defaultExpanded ? data.map((i) => i.name) : [];
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
        <AccordionItem<T>
          key={i.id}
          sectionName={i.name}
          sectionBodyText={i.description}
          data={i}
          SectionBodyComponent={bodyComponent}
          onSelect={handleOnSelect}
          expanded={openSections.indexOf(i.name) !== -1}
        />
      ))}
    </div>
  );
}
