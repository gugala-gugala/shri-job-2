export const Button = ({
        className,
        border,
        color,
        children,
        height,
        onClick, 
        radius,
        width,
        size,
        type,
        disabled
    }) => { 
        const buttonClass = size === 'small' ? 'top-button' : 'button'; 
    return (
        <button type={type ? type : 'submit'}
            disabled={disabled && disabled}
            className={buttonClass + ' ' + className}
            onClick={onClick}
            style={{
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width,
            }}
        >
        {children}
        </button>
    );
}

export default Button;
