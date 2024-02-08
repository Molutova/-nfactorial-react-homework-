import KanitMedium from "../fonts/Kanit-Medium.ttf";

const Header = () => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Kanit",
          src: `url(${KanitMedium})`,
          fontSize: "1000",
        }}
      >
        medium alike
      </p>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default Header;
