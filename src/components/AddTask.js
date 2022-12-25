import { useState } from "react"

const AddTask = ({onSubmit}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)


  function submitTask(e){
    e.preventDefault();
    onSubmit({'title': text,'appoint': day,'reminder': reminder});
  }
  return (
    <form className="add-form">
        <div className='form-control'>
            <label>Task</label>
            <input 
              type={'text'} 
              placeholder={'add task'}
              value={text}
              onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
        <div className='form-control'>
            <label>day & time</label>
            <input 
            type={'text'} 
            placeholder={'add day & time'}
            value={day} 
            onChange={(e)=>{setDay(e.target.value)}}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>set reminder</label>
            <input 
            type={'checkbox'}
            value={reminder} 
            onChange={(e)=>{setReminder(e.currentTarget.checked)}}
            ></input>
        </div>

        <input type={'submit'} className='btn btn-block' value={'save'} onClick={(e)=>{submitTask(e)}}></input>
    </form>
  )
}

export default AddTask
