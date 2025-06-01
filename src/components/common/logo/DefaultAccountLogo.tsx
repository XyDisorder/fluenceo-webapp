import  defaultAccountLogo  from '../../../assets/defaultAccountLogo.svg'

export default function DefaultAccountLogo({ className = '' }) {
  return (
    <img
      src={defaultAccountLogo}
      alt="Default Logo"
      className={`object-cover transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${className}`}
      />
  )
}