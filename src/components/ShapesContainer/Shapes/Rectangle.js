function Rectangle({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <rect
          rx='10'
          height='70'
          width='100'
          y='0'
          x='0'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Rectangle;
