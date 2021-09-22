function Ellipse({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <ellipse
          ry='26'
          rx='45.5'
          id='svg_3'
          cy='35'
          cx='50'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Ellipse;
