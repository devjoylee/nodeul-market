import React, { ReactNode } from "react";

interface ContainerProps {
	margin?: boolean;
	children: ReactNode;
}

export function Container({ margin, children }: ContainerProps) {
	return <div className={margin ? "container" : undefined}>{children}</div>;
}
