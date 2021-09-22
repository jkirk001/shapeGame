function Square({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <rect
          id='svg_7'
          height='65'
          width='65'
          y='2.5'
          x='17.5'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Square;
