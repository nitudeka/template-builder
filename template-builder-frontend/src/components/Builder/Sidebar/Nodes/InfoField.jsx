import { useDrag } from 'react-dnd'
import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnStyles,
  BtnUnderline
} from 'react-simple-wysiwyg';
import ImgText from '../../../../assets/png/text.png'

export const NodeConfig = ({ fieldValues, setFieldValues }) => {
  const onChange = (e) => {
    const updatedData = {...fieldValues, value: e.target.value}
    setFieldValues(updatedData)
  }

  return (
    <EditorProvider>
      <Editor value={fieldValues.value} onChange={onChange}>
        <Toolbar>
	  <div className='w-full pr-1.5 flex items-center justify-between'>
	    <div className='flex items-center'>
	      <BtnBold />
	      <BtnItalic />
	      <BtnUnderline />
	    </div>
	    <BtnStyles />
	  </div>
        </Toolbar>
      </Editor>
    </EditorProvider>
  )
}

const InfoContentNode = () => {
  const [, drag] = useDrag(() => ({
    type: "info-field",
    item: {
      component: "info-field",
    } 
  }))

  return (
    <div ref={drag} className='flex items-center justify-start gap-4'>
      <img src={ImgText} className='w-8' /> 
      <span className='font-semibold text-gray-800'>Info Content</span>
    </div>
  )
}

export default InfoContentNode
