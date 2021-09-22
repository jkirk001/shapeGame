function Triangle({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <path
          d='m3.5,66.5l46.5,-63l46.5,63l-93,0z'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Triangle;
