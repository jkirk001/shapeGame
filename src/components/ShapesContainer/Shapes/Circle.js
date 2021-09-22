function Circle({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <ellipse
          ry='33'
          rx='35'
          id='svg_6'
          cy='35.5'
          cx='49.5'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Circle;
