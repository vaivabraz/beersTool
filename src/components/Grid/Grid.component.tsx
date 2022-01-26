import "./Styles/Grid.css";

type GridType<DataType> = {
  data: DataType[];
  gridComponent: any;
};
//TODO: not correct type :/
export function Grid<T extends { id: number }>({
  data,
  gridComponent: GridComponent,
}: GridType<T>) {
  return (
    <div className="Grid">
      {data.map((i) => (
        <div key={i.id} className="GridItem">
          <GridComponent data={i} />
        </div>
      ))}
    </div>
  );
}
