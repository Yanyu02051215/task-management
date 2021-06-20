import React from 'react'
import './assets/style.css';

const Home = () => {
  return (
    <table>
      <tr>
        <th>部門</th>
        <th>等級</th>
        <th>職種</th>
        <th>周期</th>
        <th>仕事内容</th>
      </tr>
      <tr>
        <td>トリさん</td>
        <td>空を飛ぶこと</td>
        <td>グリーン</td>
        <td>山</td>
        <td>仕事</td>
      </tr>
      <tr>
        <td>クジラさん</td>
        <td>潮を吹くこと</td>
        <td>ブルー</td>
        <td>海</td>
        <td>仕事</td>
      </tr>
      <tr>
        <td>カニさん</td>
        <td>反復横飛び</td>
        <td>レッド</td>
        <td>川</td>
        <td>仕事</td>
      </tr>
    </table>
  )
}


export default Home;