import { MouseEventHandler } from "react";

export interface ModalProps {
	isVisible: boolean;
	closeModal: MouseEventHandler<HTMLDivElement>;
}