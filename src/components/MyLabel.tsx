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
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`${ size }`}>
        { label }
    </span>
  )
}
