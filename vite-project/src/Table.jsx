import React, { useState } from 'react';
import jsonData from './data.json';


const Row = ({ data, level = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(false);
    const hasChildren = data.children && data.children.length > 0;
  
    const handleRowClick = () => {
      if (hasChildren) {
        setExpanded(!expanded);
      }
      setSelected(!selected);
    };
  
    return (
      <>
        <tr
          onClick={handleRowClick}
          style={{
            backgroundColor: selected ? '#add8e6' : 'transparent',
            cursor: 'pointer',
            paddingLeft: `${level * 20}px`
          }}
        >
          <td>{data.id}</td>
          <td style={{ paddingLeft: `${level * 20}px` }}>{data.text1}</td>
          <td>{data.text2}</td>
        </tr>
        {hasChildren && expanded &&
          data.children.map(child => <Row key={child.id} data={child} level={level + 1} />)
        }
      </>
    );
  };
  

const Table = () => {
  return (
    <>
    <h1 className="text-3xl underline font-light ">
      Hello world!
    </h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Text 1</th>
          <th>Text 2</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.rows.map(row => (
          <Row key={row.id} data={row} />
        ))}
      </tbody>
    </table>
    </>
    
    
  );
};

export default Table;
