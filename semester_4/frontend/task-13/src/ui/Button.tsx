import tw from 'tailwind-styled-components';

const ButtonComponent = tw.button<ButtonProps>`
    font-semibold rounded-lg
    ${(props) => props.size === 'sm' ? 'text-xs py-1 px-2' : props.size === 'lg' ? 'text-lg py-2 px-4' : 'text-base py-2 px-4'}
    bg-primary text-white
    hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
`

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset'; // Optional type prop, defaults to 'button'
    size?: 'sm' | 'md' | 'lg'; // Optional size prop
    onClick?: () => void; // Optional onClick handler
    children?: React.ReactNode; // Optional children prop
};

export const Button: React.FC<ButtonProps> = ({ type = 'button', size = 'md', onClick = () => {}, children }) => {
    return (
        <ButtonComponent type={type} size={size} onClick={onClick}>
            {children}
        </ButtonComponent>
    );
}

export default Button;
