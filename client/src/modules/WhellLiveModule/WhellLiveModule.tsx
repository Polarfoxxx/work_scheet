import React from 'react';
import { Stage, Layer, Line, Text } from "react-konva";

function WhellLiveModule(): React.JSX.Element {
  const diel = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 300, y: 200 },
    { x: 100, y: 200 },
    { x: 100, y: 100 },
  ];

  const sirka = diel[1].x - diel[0].x;
  const vyska = diel[2].y - diel[1].y;

  return (
    <Stage width={500} height={400}>
      <Layer>
        <Line points={diel.flatMap(p => [p.x, p.y])} stroke="black" strokeWidth={2} />
        <Line points={[100, 220, 300, 220]} stroke="red" strokeWidth={1} />
        <Text x={180} y={225} text={`${sirka} mm`} fontSize={14} fill="red" />
        <Line points={[320, 100, 320, 200]} stroke="red" strokeWidth={1} />
        <Text x={330} y={140} text={`${vyska} mm`} fontSize={14} fill="red" />
      </Layer>
    </Stage>
  );
}

export default WhellLiveModule;
