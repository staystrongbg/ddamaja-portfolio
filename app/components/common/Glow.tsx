type GlowProps = {
  rotate?: string;
  background: string;
  width: string;
  height: string;
};
const Glow = ({ rotate, background, width, height }: GlowProps) => {
  return (
    <div
      className={` blur-xl  absolute top-1/2 -translate-y-1/2 rounded-full ${background} ${rotate} ${width} ${height}`}
    />
  );
};

export default Glow;
