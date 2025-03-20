import { ButtonPrimaryProps } from "./types"

const Button = ({
    text,
    onClick,
    className = "",
    areaLabel,
    role,
    disabled = false
}: ButtonPrimaryProps) => {
    return (
        <button
            className={`button-default ${className} `}
            onClick={onClick}
            area-label={areaLabel}
            role={role}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button;