import {
  BackdropBlur,
  Canvas,
  rect,
  rrect,
  vec,
  useValue,
  useTouchHandler,
  Rect,
  LinearGradient,
  Paint,
  Text,
  useDerivedValue,
  runDecay,
  Circle, Group
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { useWindowDimensions } from "react-native";

 const Card = () => {
  const { width, height } = useWindowDimensions();
  const CARD_WIDTH = width - 64;
  const CARD_HEIGHT = CARD_WIDTH * 0.61;
  const x = useValue((width - CARD_WIDTH) / 2);
  const y = useValue((height - CARD_HEIGHT) / 2);
  return (
    <Canvas style={{ flex: 1 }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

export default Card;