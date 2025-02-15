import { useDrag } from 'react-dnd'
import mockDb from '../../../../bin/mockDb.json'
import Input from '../../../UI/Input'
import Select from '../../../UI/Select'
import ImgInput from '../../../../assets/png/input.png'

export const NodeConfig = ({ fieldValues, setFieldValues }) => {
  const onFieldChange = (label, value) => {
    setFieldValues({...fieldValues, [label]: value})
  }

  return (
    <div>
      <Input label='Edit title' value={fieldValues.title || ''} onChange={(v) => onFieldChange('title', v)} className='mb-3' />
      <Select label='Edit value' selectedOption={fieldValues.value} handleChange={(v) => onFieldChange('value', v)} options={mockDb.boarding_details} />
    </div>
  )
}

const TicketFieldNode = () => {
  const [, drag] = useDrag(() => ({
    type: "ticket-field",
    item: {
      component: "ticket-field",
    } 
  }))

  return (
    <div ref={drag} className='flex items-center justify-start gap-4'>
      <img src={ImgInput} className='w-8' /> 
      <span className='font-semibold text-gray-800'>Ticket Field</span>
    </div>
  )
}

export default TicketFieldNode
