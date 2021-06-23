import React, {useEffect} from 'react';
import taskService from '../services/tasks';
import '../assets/style.css';

const TaskList = () => {

  // useEffect(() => {
  //   let mounted = false;
  //   const f = async () => {
  //     if (!mounted) {
  //       taskService.findAll();
  //     }
  //   };
  //   f();
  //   return () => {
  //     mounted = true;
  //   };
  // }, []);

  return (
    <>

        {/* {
          blogs.map((blog) => <Card key={blog.id} title={blog.title}/>)
        } */}
      </>
    // <table>
    //   <tr>
    //     <th>部門</th>
    //     <th>等級</th>
    //     <th>職種</th>
    //     <th>周期</th>
    //     <th>仕事内容</th>
    //   </tr>
    //   <tr>
    //     <td>トリさん</td>
    //     <td>空を飛ぶこと</td>
    //     <td>グリーン</td>
    //     <td>山</td>
    //     <td>仕事</td>
    //   </tr>
    //   <tr>
    //     <td>クジラさん</td>
    //     <td>潮を吹くこと</td>
    //     <td>ブルー</td>
    //     <td>海</td>
    //     <td>仕事</td>
    //   </tr>
    //   <tr>
    //     <td>カニさん</td>
    //     <td>反復横飛び</td>
    //     <td>レッド</td>
    //     <td>川</td>
    //     <td>仕事</td>
    //   </tr>
    // </table>
  )
}


export default TaskList;