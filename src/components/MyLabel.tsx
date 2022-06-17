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
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
}: MyLabelProps) => {
    return (
        <span className={`label ${ size } text-${ color }`}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
