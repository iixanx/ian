import { useState } from "react";

export default function useOpenModal() {
  const [isOpenModal, setIsOpenModal] = useState<number | null>(null);
  const clickModal = () => {
    setIsOpenModal(1);
  };
  const closeModal = () => {
    setIsOpenModal(null);
  };
  return { isOpenModal, clickModal, closeModal };
}
