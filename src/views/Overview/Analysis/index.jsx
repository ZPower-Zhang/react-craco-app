import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'antd';
// 引入ECharts主模块 
import * as echarts from 'echarts';
// 引入折线图需要的模块 
// import "echarts/lib/chart/line";
// import "echarts/lib/component/title";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/legend";
// import 'echarts/lib/component/polar';

const Analysis = (props) => {
  const [ counter,setCounter ] = useState({ name:'计数器',number:0 });
  const [ number, setNumber ] = useState(0)
  const [ sourceData, setSourceData ] = useState([])
  function lazy () {
    setTimeout(() => {
      setNumber(number + 1)
      // setNumber(number => number + 1)
    }, 0)
  }
  useEffect(() => {
    const data = [];
    for (let i = 0; i <= 100; i++) {//根据公式,生成绘制在图上的坐标数据源数组
      const theta = i / 100 * 360;
      const r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
      data.push([ r, theta ]);
    }
    setSourceData(data)
    // this.setState(() => {
    //     return {
    //         sourceData: data//更新react组件的state数据
    //     };
    // });
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示  
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制Echarts实例所需要的数据
    myChart.setOption({
      title: {
        text: '极坐标双数值轴'
      },
      legend: {
        data: [ 'line' ]
      },
      polar: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
      },
      series: [ {
        coordinateSystem: 'polar',//极坐标图
        name: 'line',
        type: 'line',
        data: data //根据已生成的坐标数组来绘制爱心图形
      } ]
    });
  }, [])
  return (
    <div className="page-container">
      <Row gutter={ 24 }>
        <Col span={ 6 }>
          <Card>
            <div id = "main" style = { {  width: 300, height: 300 } }> </div>
          </Card>
        </Col>
        <Col span={ 6 }>
          2 col-order-3
        </Col>
        <Col span={ 6 }>
          3 col-order-2
        </Col>
        <Col span={ 6 }>
          4 col-order-1
        </Col>
      </Row>
      <p>{number}</p>
      <p>{counter.name}:{counter.number}</p>
      <button onClick={ () => setNumber(number + 1) }> 加1</button>
      <button onClick={ lazy }>lazy</button>

      <button onClick={ ()=>setCounter({ ...counter,number:counter.number+1 }) }>+</button>
      <button onClick={ ()=>setCounter(counter) }>++</button>
    </div>
  )
}

export default Analysis

// function SubCounter({onClick,data}){
//   console.log('SubCounter render');
//   return (
//     <button onClick={onClick}>{data.number}</button>
//   )
// }
// SubCounter = memo(SubCounter);

// export default function Counter6(){
//   console.log('Counter render');
//   const [name,setName]= useState('计数器');
//   const [number,setNumber] = useState(0);
//   const data ={number};
//   const addClick = ()=>{
//     setNumber(number+1);
//   };
//   return (
//     <>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//       <SubCounter data={data} onClick={addClick}/>
//     </>
//   )
// }

// let oldData,oldAddClick;
// export  default  function Counter2(){
//     console.log('Counter render');
//     const [name,setName]= useState('计数器');
//     const [number,setNumber] = useState(0);
//     // 父组件更新时，这里的变量和函数每次都会重新创建，那么子组件接受到的属性每次都会认为是新的
//     // 所以子组件也会随之更新，这时候可以用到 useMemo
//     // 有没有后面的依赖项数组很重要，否则还是会重新渲染
//     // 如果后面的依赖项数组没有值的话，即使父组件的 number 值改变了，子组件也不会去更新
//     //const data = useMemo(()=>({number}),[]);
//     const data = useMemo(()=>({number}),[number]);
//     console.log('data===oldData ',data===oldData);
//     oldData = data;
    
//     // 有没有后面的依赖项数组很重要，否则还是会重新渲染
//     const addClick = useCallback(()=>{
//         setNumber(number+1);
//     },[number]);
//     console.log('addClick===oldAddClick ',addClick===oldAddClick);
//     oldAddClick=addClick;
//     return (
//       <>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <SubCounter data={data} onClick={addClick}/>
//       </>
//     )
// }
