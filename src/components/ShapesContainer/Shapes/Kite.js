function Kite({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <path
          d='m3.5001,1.5l92.9999,0l-46.49995,33.5l46.49995,33.5l-93,0l46.50005,-33.5l-46.49995,-33.5z'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}

export default Kite;
