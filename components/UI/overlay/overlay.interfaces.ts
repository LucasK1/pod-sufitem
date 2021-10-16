import { MouseEventHandler } from "react";

export interface OverlayProps {
	isVisible: boolean;
	onDismiss: MouseEventHandler<HTMLDivElement>;
}