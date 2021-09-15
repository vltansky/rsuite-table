### Rowspan Cell

<!--start-code-->

```js
const App = () => {
  return (
    <Table
      bordered
      height={400}
      data={fakeDataForRowSpan}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column
        width={250}
        resizable
        verticalAlign="middle"
        rowSpan={rowData => {
          return rowData.rowspan;
        }}
      >
        <HeaderCell>city</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={130} resizable>
        <HeaderCell>firstName</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130} resizable>
        <HeaderCell>lastName</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={200} resizable>
        <HeaderCell>street</HeaderCell>
        <Cell dataKey="street" />
      </Column>

      <Column width={200}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  );
};

ReactDOM.render(<App />);
```

<!--end-code-->

```js
const data = [
  {
    city: 'New Gust',
    name: 'Janis',
    rowspan: 2
  },
  {
    city: 'New Gust',
    name: 'Ernest Schuppe Anderson'
  },
  {
    city: 'Maria Junctions',
    name: 'Alessandra',
    rowspan: 3
  },
  {
    city: 'Maria Junctions',
    name: 'Margret'
  },
  {
    city: 'Maria Junctions',
    name: 'Emiliano'
  }
];

<Table data={data}>
  <Column
    width={100}
    verticalAlign="middle"
    rowSpan={rowData => {
      return rowData.rowspan;
    }}
  >
    <HeaderCell>Name</HeaderCell>
    <Cell dataKey="city" />
  </Column>
  <Column width={100}>
    <HeaderCell />
    <Cell dataKey="name" />
  </Column>
</Table>;
```