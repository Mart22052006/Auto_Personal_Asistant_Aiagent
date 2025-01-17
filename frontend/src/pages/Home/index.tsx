/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import './home.scss';
import Card from '@/components/card';
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'; // Импорт локали через ES6
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS, // Используем импортированную локаль
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [events, setEvents] = useState([]);

  // Получение данных активности
  useEffect(() => {
    axios
      .get('/all') // Используем эндпоинт "all"
      .then((res) => setActivities(res.data.data.slice(0, 4)))
      .catch((error) => console.log('Error fetching activities:', error));
  }, []);

  // Получение задач для календаря
  useEffect(() => {
    axios
      .get('/tasks') // Используем эндпоинт "tasks"
      .then((res) =>
        setEvents(
          res.data.map((task) => ({
            title: task.name,
            start: new Date(task.start_date),
            end: new Date(task.end_date),
          }))
        )
      )
      .catch((error) => console.log('Error fetching tasks:', error));
  }, []);

  return (
    <>
      {/* Header */}
      <div className="h-1/6 relative text-white">
        <img src="/images/rainbow.jpg" className="absolute w-full h-full" alt="Background" />
        <div className="absolute z-10 w-[100%] left-[0%] top-[50%] transform -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="w-[71%] img-top text-center flex flex-col justify-around">
            <div className="w-3/4 text-xl mx-auto flex justify-between items-center">
              <p className="text-5xl py-2 font-bold mb-2">Hi! User</p>
              <div className="rating relative">
                <img src="/images/sbc-logo.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Logo" />
              </div>
              <p className="text-5xl py-2 font-bold mb-2">2025.01.15</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-5/6 flex">
        {/* Left: Activities Section */}
        <div className="w-1/2 h-full p-4" style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
          <div className="text-3xl p-3 text-gray-800 font-bold">Activities</div>
          <div className="w-full flex flex-wrap gap-4">
            {activities &&
              activities.map((item) => (
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

        {/* Right: Calendar */}
        <div className="w-1/2 h-full p-6 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Calendar</h2>
          <div className="flex-1 bg-white rounded-lg p-4 shadow-lg overflow-y-auto">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
