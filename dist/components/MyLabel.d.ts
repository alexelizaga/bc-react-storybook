/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text of the label
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the label
     */
    allCaps?: boolean;
    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Personalized color of the label
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
