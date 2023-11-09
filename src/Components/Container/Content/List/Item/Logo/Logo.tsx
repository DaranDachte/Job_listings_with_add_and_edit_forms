type LogoProps = {
  logo: string;
};

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  );
};
export default Logo;
