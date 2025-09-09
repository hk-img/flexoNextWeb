// components/SvgIcon.jsx
const Svg = ({ name, className = "", ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Svg;
