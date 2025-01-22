const Input = ({ label, className, onChange, value }) => {
  return (
    <div className={[className ? className : '', 'w-full'].join(' ')}>
      {label && <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
	{ label }
      </label>}
      <input value={value} onChange={({ target }) => onChange ? onChange(target.value) : null} className='appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type='text' />
    </div>
  )
}

export default Input
