/* eslint-disable camelcase */
import { useState } from 'react'
import './home.scss'
import Card from '@/components/card'
import { useMount } from 'ahooks'
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState([
    {
      pk: 1,
      fields: {
        id: 1,
        img: 'https://picsum.photos/900/1200',
        name: 'SG Book Council',
        release_time: '2021',
        director: 'Action comedy',
        actor: 'Action comedy',
        // 评分
        score: 5.9,
        // 时长
        duration: '2h 30m',
        // 类型
        type: 'Action',
        // desc
        desc: 'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
      },
    },
  ])
  useMount(() => {
    //
    axios
      .post('/api/all', {
        name: '',
      })
      .then(res => {
        // 获取前4个电影
        // setData()
        // console.log()
        setData(res.data.data.slice(0, 4))
      })
      .catch(error => {
        console.log('error', error)
      })
  })
  return (
    <>
      {/* 页头部分 */}
      <div className="h-1/6 relative text-white">
        {/* 背景图片 */}
        <img
          src="/images/rainbow.jpg"
          className="absolute w-full h-full"
        />
  
        {/* 中间内容 */}
        <div className="absolute z-10 w-[100%] left-[0%] top-[50%] transform -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="w-[71%] img-top text-center flex flex-col justify-around">
            {/* 用户信息部分 */}
            <div className="w-3/4 text-xl mx-auto flex justify-between items-center">
              <p className="text-5xl py-2 font-bold mb-2">Hi! User</p>
              <div className="rating relative">
                <img
                  src="/images/sbc-logo.jpg"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
              </div>
              <p className="text-5xl py-2 font-bold mb-2">2025.01.15</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="h-5/6 flex">
    {/* 左侧：Activities 部分 */}
    <div
  className="w-1/2 h-full p-4"
  style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
      <div className="text-3xl p-3 text-gray-800 font-bold">Activities</div>
      <div className="w-full flex flex-wrap gap-4">
        {data &&
          data.map((item) => (
            <Card
              key={item.fields.name}
              img={item.fields.img}
              title={item.fields.name}
              year={item.fields.release_time}
              director={item.fields.director}
            />
          ))}
      </div>
    </div>

      {/* 右侧：To-Do List 和日历 */}
      <div className="w-1/2 h-full p-6 flex flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">To-Do List</h2>
      {/* To-Do List */}
      <div className="flex-1 bg-white rounded-lg p-4 shadow-lg overflow-y-auto">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">Complete React project</li>
          <li className="text-gray-700">Review algorithm notes</li>
          <li className="text-gray-700">Prepare for team meeting</li>
          <li className="text-gray-700">Update To-Do list</li>
        </ul>
      </div>

      {/* 日历图片 */}
      <div className="flex-shrink-0 mt-6">
        <img
          src="/images/calendar.jpg"
          alt="Calendar"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
    </>
  )
  }

export default Home
