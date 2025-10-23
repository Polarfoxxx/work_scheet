import React from 'react';
import { Stage, Layer, Line, Text } from "react-konva";

function WhellLiveModule(): React.JSX.Element {
const [positions, setPositions] = React.useState(200);

  const diel = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 300, y: 200 },
    { x: 100, y: 200 },
    { x: 100, y: 100 },
  ];

  const sirka = diel[1].x - diel[0].x;
  const vyska = diel[2].y - diel[1].y;


  const handleClick = () => {
    setPositions(positions + 10);
  };



  return (
    <div>
      <div>
      </div>
      <div>
        <button onClick={handleClick}>
          click me
        </button>
      </div>
      <div>
        <div>
          <Stage width={800} height={600} style={{ border: '1px solid grey' }}>
            <Layer>
              <Line points={diel.flatMap(p => [p.x, p.y])} stroke="black" strokeWidth={2} />
              <Line points={[100, positions, 360, 200]} stroke="red" strokeWidth={1} />
              <Text x={180} y={225} text={`${sirka} mm`} fontSize={14} fill="red" />
              <Line points={[100, 100, 360, 100]} stroke="red" strokeWidth={10} draggable 
                onDragEnd={e => {
                  console.log('Nová pozícia:', e.target.x(), e.target.y());
                }} />
              <Text x={330} y={140} text={`${vyska} mm`} fontSize={14} fill="red" />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>

  );
}

export default WhellLiveModule;
