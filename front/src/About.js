import React from 'react'
import './assets/style.css';

const About = () => {
  return (
    <>
    <h2>顧問先業務一覧</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}


export default About;