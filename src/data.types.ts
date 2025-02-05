import { ReactElement } from "react";

export interface MapItemProps {
    icon?: ReactElement;
    name?: string;
    href: string;
}

export type MapProps = MapItemProps[];