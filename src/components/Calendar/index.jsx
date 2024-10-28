import React from 'react';
import './styles.scss';

const Calendar = ({ month, year, highlightDate }) => {
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const days = ["日", "一", "二", "三", "四", "五", "六"];
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  // 建立日曆數組
  const calendar = [];
  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(i);
  }

  return (
    <div className="calendar-overlay">
      <div className="calendar-header">
        <div className="month-year">
        <span className='num'>114</span><span className='line'>/</span><span className='num'>{String(month + 1).padStart(2, '0')}</span> <span className='line'>/</span> <span className='num'>{String(highlightDate).padStart(2, '0')}</span>
        </div>
      </div>
      <div className="weekdays">
        {days.map((day, index) => (
          <div key={index} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days">
        {calendar.map((day, index) => (
          <div 
            key={index} 
            className={`day ${day === highlightDate ? 'highlighted' : ''} ${!day ? 'empty' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;