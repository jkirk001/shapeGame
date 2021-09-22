import Circle from './Shapes/Circle';
import Ellipse from './Shapes/Ellipse';
import Hex from './Shapes/Hex';
import Kite from './Shapes/Kite';
import Oct from './Shapes/Oct';
import Para from './Shapes/Parallelogram';
import Pent from './Shapes/Pent';
import Rectangle from './Shapes/Rectangle';
import Square from './Shapes/Sqaure';
import Star from './Shapes/Star';
import Trap from './Shapes/Trap';
import Triangle from './Shapes/Triangle';

function ShapesContainer({ dataset }) {
  if (!dataset) return '...loading';
  return (
    <>
      {dataset.map((shape, index) => {
        if (shape[0] === 'circle')
          return (
            <div key={index}>
              <Circle fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'ellipse')
          return (
            <div key={index}>
              <Ellipse fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'hex')
          return (
            <div key={index}>
              <Hex fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'kite')
          return (
            <div key={index}>
              <Kite fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'oct')
          return (
            <div key={index}>
              <Oct fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'para')
          return (
            <div key={index}>
              <Para fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'pent')
          return (
            <div key={index}>
              <Pent fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'rectangle')
          return (
            <div key={index}>
              <Rectangle fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'square')
          return (
            <div key={index}>
              <Square fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'star')
          return (
            <div key={index}>
              <Star fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'trap')
          return (
            <div key={index}>
              <Trap fill={shape[1]} />
            </div>
          );
        if (shape[0] === 'triangle')
          return (
            <div key={index}>
              <Triangle fill={shape[1]} />
            </div>
          );
        return null;
      })}
    </>
  );
}
export default ShapesContainer;
