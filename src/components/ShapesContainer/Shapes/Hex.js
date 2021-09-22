function Hex({ fill }) {
  return (
    <svg width='100' height='70'>
      <g>
        <path
          d='m5,35l19.28572,-32.5l51.42857,0l19.28571,32.5l-19.28571,32.5l-51.42857,0l-19.28572,-32.5z'
          stroke='#000'
          fill={`#${fill}`}
        />
      </g>
    </svg>
  );
}
export default Hex;
