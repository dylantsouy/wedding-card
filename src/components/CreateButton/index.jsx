import './styles.scss';
export default function CreateButton(props) {
    const { onClick, disabled, text, variant, color, icon, textColor, permission } = props;

    return (
        <button
            variant={variant}
            type='button'
            className={`CreateButton JasonHandwriting3 ${permission === false ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled || permission === false}
            style={{ '--color': `${color}`, '--textColor': `${textColor || '#fff'}` }}
        >
            <span className='button__text'>{text}</span>
            <span className='button__icon'>{icon}</span>
        </button>
    );
}
