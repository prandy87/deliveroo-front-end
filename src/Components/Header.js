import image from "../Assets/Pictures/Deliveroo_logo.svg.png";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
