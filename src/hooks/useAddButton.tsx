import { useState } from "react";

export default function useAddButton() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const buttonClick = () => {
    setIsButtonClicked(true);
  };
  const closeButtonModal = () => {
    setIsButtonClicked(false);
  };
  return { isButtonClicked, buttonClick, closeButtonModal };
}