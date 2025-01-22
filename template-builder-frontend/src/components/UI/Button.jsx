const Button = ({ children, bgClass, onClick, fullWidth }) => {
  return (
    <button onClick={onClick} className={[fullWidth ? 'w-full' : '', bgClass ? bgClass : 'bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500', "text-white font-bold py-2 px-4 border-b-4 rounded"].join(' ')}>
      { children }
    </button>
  )
}

export default Button
