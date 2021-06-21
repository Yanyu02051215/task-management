import React, {useState} from 'react';
import InputField from './components/InputField'
import './assets/style.css';

const About = () => {
  const [count, setCount] = useState(10)

  const default_form = [];
  for (let i = 0; i < count; i += 1) {
    default_form.push(
    <div key={i} className="add-form">
      <InputField label="周期" className="priod-form"/>
      <InputField label="仕事内容" className="task-form"/>
    </div>
    );
  }

  const countUp = () => {
    setCount(count + 1)
    }

  return (
    <>
    <h2 className="text-center">顧問先業務一覧</h2>
    <div className="inline-flex">
      <InputField label="部門" className="default-form"/>
      <InputField label="職種" className="default-form"/>
      <InputField label="等級" className="default-form"/>
    </div>

    {default_form}

    <div class="text-center">
    <button className="text-center add-btn" onClick={countUp}>+</button>
    </div>
    <div class="text-center">
      <button className="text-center">送信</button>
    </div>
    </>
  )
}


export default About;