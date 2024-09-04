/**
 * Componente de Button
 * @typedef {Object} Props
 * @param {object} props
 * @param {string} props.type - Tipo de button default button
 * @param  {('primary'|'secondary'|'social'|'tertiary'|'quaternary')} props.typeStyled - Estilo de button
 * @param {string} props.className - Clase de button
 * @param {function} props.onClick - onClick de button
 * @param {boolean} props.disabled - Estado de button
 * @param {string} props.text - Texto de button
 * @param {JSX.Element} props.IconAfter - Icono después del texto
 * @param {JSX.Element} props.IconBefore - Icono antes del texto
 * @param {object} props.props - Props de button
 * @returns {JSX.Element}
 */

const Button = ({
  type = 'button',
  typeStyled = 'primary',
  className,
  onClick,
  disabled = false,
  text,
  IconAfter,
  IconBefore,
  ...props
}) => {

  const buttonStyles = {
    primary: 'button-primary',
    secondary: 'button-secondary',
  }

  return (
    <button
      type={type}
      className={buttonStyles[typeStyled] + ' ' + className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {IconBefore} {text} {IconAfter}
    </button>
  )
}

export default Button


