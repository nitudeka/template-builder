import RSelect from 'react-select';

const Select = ({ label, selectedOption, handleChange, options }) => {
  return (
    <div>
      {label && <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
	{ label }
      </label>}
      <RSelect
        value={selectedOption || null}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default Select
