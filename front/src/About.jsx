import React, {useState, useCallback} from 'react';
import InputField from './components/InputField'
import SelectBox from './components/SelectBox'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './assets/style.css';

const About = () => {
  const [priod, setPriod] = useState(""),
        [count, setCount] = useState(10),
        [task, setTask] = useState(""),
        [department, setDepartment] = useState(""),
        [grade, setGrade] = useState(""),
        [occupation, setOccupation] = useState("")

  const priods = [
    {id: "day", name: "日"},
    {id: "week", name: "週"},
    {id: "month", name: "月"},
  ]

  const countUp = () => {
    setCount(count + 1)
  }

  const inputDepartment = useCallback((event) => {
    setDepartment(event.target.value)
    }, [setDepartment])

  const inputOccupation = useCallback((event) => {
    setOccupation(event.target.value)
    }, [setOccupation])

    const inputGrade = useCallback((event) => {
      setGrade(event.target.value)
      }, [setGrade])

    const inputTask = useCallback((event) => {
      setTask(event.target.value)
      }, [setTask])

    const default_form = [];
    for (let i = 0; i < count; i += 1) {
      default_form.push(
      <div key={i} className="add-form">
        <SelectBox
          label={"周期"} options={priods} required={true}
          select={setPriod} value={priod} className="priod-form"
        />
        <InputField
          fullWidth={true} label={"仕事内容"} multiline={true} required={false} rows={2} value={task} type={"text"} onChange={inputTask}
        />
      </div>
      );
    }

  return (
    <>
      <h2 className="text-center">顧問先業務一覧</h2>
      <div>
        <InputField
          fullWidth={false} label={"部門"} multiline={false} required={true} rows={1}
          value={department} type={"text"} onChange={inputDepartment}
        />
        <InputField
          fullWidth={false} label={"職種"} multiline={false} required={true} rows={1}
          value={occupation} type={"text"} onChange={inputOccupation} className="second-form"
        />
        <InputField
          fullWidth={false} label={"等級"} multiline={false} required={false} rows={1}
          value={grade} type={"text"} onChange={inputGrade} className="second-form"
        />
      </div>

      {default_form}

      <div class="text-center">
        <AddCircleIcon className="add-btn" onClick={countUp}/>
      </div>
      <div class="text-center">
        <button className="text-center">送信</button>
      </div>
    </>
  )
}


export default About;