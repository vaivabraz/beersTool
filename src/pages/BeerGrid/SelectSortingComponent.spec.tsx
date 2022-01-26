import { SelectSorting } from "./SelectSorting.component";
import { shallow, configure } from "enzyme";
import { BeerType } from "../../services";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("SelectSorting Component sorting", () => {
  const data = [
    { id: 1, name: "Sweet beer", abv: 5 } as BeerType,
    { id: 2, name: "Apple beer", abv: 3.5 } as BeerType,
    { id: 3, name: "Bananas beer", abv: 10 } as BeerType,
  ];

  test("sort by name", () => {
    const sortedData = [
      { id: 2, name: "Apple beer", abv: 3.5 } as BeerType,
      { id: 3, name: "Bananas beer", abv: 10 } as BeerType,
      { id: 1, name: "Sweet beer", abv: 5 } as BeerType,
    ];
    const updateDataCallback = jest.fn();
    const component = shallow(
      <SelectSorting data={data} updateData={updateDataCallback} />
    );
    component.find("select").simulate("change", {
      target: { value: "name" },
    });

    expect(updateDataCallback).toHaveBeenCalledWith(sortedData);
  });

  test("sort by abv ascending", () => {
    const sortedData = [
      { id: 2, name: "Apple beer", abv: 3.5 } as BeerType,
      { id: 1, name: "Sweet beer", abv: 5 } as BeerType,
      { id: 3, name: "Bananas beer", abv: 10 } as BeerType,
    ];
    const updateDataCallback = jest.fn();
    const component = shallow(
      <SelectSorting data={data} updateData={updateDataCallback} />
    );
    component.find("select").simulate("change", {
      target: { value: "abv_ascend" },
    });

    expect(updateDataCallback).toHaveBeenCalledWith(sortedData);
  });

  test("sort by abv descending", () => {
    const sortedData = [
      { id: 3, name: "Bananas beer", abv: 10 } as BeerType,
      { id: 1, name: "Sweet beer", abv: 5 } as BeerType,
      { id: 2, name: "Apple beer", abv: 3.5 } as BeerType,
    ];
    const updateDataCallback = jest.fn();
    const component = shallow(
      <SelectSorting data={data} updateData={updateDataCallback} />
    );
    component.find("select").simulate("change", {
      target: { value: "abv_descend" },
    });

    expect(updateDataCallback).toHaveBeenCalledWith(sortedData);
  });
});
