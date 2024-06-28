import { ChangeEvent, FC, FormEvent } from "react";

interface HeaderProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputCity: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Header: FC<HeaderProps> = ({
  onSubmit,
  inputCity,
  handleInputChange,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Header;
