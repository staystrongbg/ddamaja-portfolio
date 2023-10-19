type HeadingVertProps = {
  children: React.ReactNode;
  background?: string;
  onClick?: () => void;
};
const HeadingVert = ({ children, background, onClick }: HeadingVertProps) => {
  return (
    <h3
      onClick={onClick}
      className={`text-lg dark:text-gray-50 vertical-text py-4 ${background} `}
    >
      {children}
    </h3>
  );
};

export default HeadingVert;
