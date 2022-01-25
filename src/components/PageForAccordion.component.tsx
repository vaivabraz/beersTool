import { useState } from "react";
import { Accordion } from "./Accordion.component";

export const PageForAccordion = () => {
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
  const [timestamp, setTimestamp] = useState<string>();

  return (
    <div>
      <Accordion
        data={data}
        controlSections={{ expand: false, updateAt: timestamp }}
      />
      <button onClick={() => setTimestamp(Date())}>Collapse everything!</button>
    </div>
  );
};
