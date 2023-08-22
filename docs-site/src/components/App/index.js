import React, { useState, useEffect } from "react";
import ExampleComponents from "../Examples";
import ribbon from "./ribbon.png";
import logo from "./logo.png";
import DatePicker from "react-datepicker";
import "../../../../src/stylesheets/datepicker.scss";
import { addDays } from "date-fns";

const Example = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(true);
  const [holiEvent, setHoliEvent] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const Show = window.scrollY < 400;
    if (Show) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const holidays = [
    { date: new Date('2023-08-23'), event: 'Chhat' },
    { date: new Date('2023-08-25'), event: 'Raksha Bhandhan' },
    { date: new Date('2023-08-27'), event: 'Holi' },
    { date: new Date('2023-08-29'), event: 'Deewali' },
    { date: new Date('2023-08-31'), event: 'Navratra' },
  ];

  const changeDate = (date) => {
    setStartDate(date);
    setIsOpen(false);
  };

  function checkHolidayWithNormalDay(holidate, normalDate) {
    return (
      holidate.getDate() === normalDate.getDate() &&
      holidate.getMonth() === normalDate.getMonth() &&
      holidate.getFullYear() === normalDate.getFullYear()
    );
  }

  function addClsToholiday(date) {
    // console.log(date);
    let holidayCls = "";
    holidays.forEach((holiday) => {
      if (checkHolidayWithNormalDay(holiday.date, date)) {
        return holidayCls = "holiday"
      }
    });
    return holidayCls;
  }

  // function mouseOver(date) {
  //   const holiday = holidays.find(h => checkHolidayWithNormalDay(h.date, date));
  //   setHoliEvent(holiday ? holiday.event : "");
  // }

  // function mouseLeave() {
    // setHoliEvent("");
  // }

  // function getHighLightsDay() {
  //   let highlight = [];
  //   for (let index = 0; index < holidays.length; index++) {
  //     highlight.push(addDays(new Date(`${holidays[index].date}`), 0));
  //   }
  //   return highlight;
  // }

  const renderDayContents = (day, date) => {
    const holiday = holidays.find(h => checkHolidayWithNormalDay(h.date, date));
    const tooltipText = holiday && holiday.event;
    return <span title={tooltipText}>{date.getDate()}</span>;
  };

  return (
    <>
      <DatePicker
        open={isOpen && isScrolled}
        selected={startDate}
        onChange={(date) => changeDate(date)}
        onInputClick={() => setIsOpen(true)}
        dayClassName={(date) => addClsToholiday(date)}
        // highlightDates={getHighLightsDay()}
        // onMonthMouseLeave={mouseLeave}
        // onDayMouseEnter={(date) => mouseOver(date)}
        renderDayContents={renderDayContents}
      >
        {holiEvent ? <div className="holiday-l">{holiEvent}</div> : ""}
      </DatePicker>
    </>
  );
};

const Root = () => (
  <div>
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">React Datepicker</h1>
        <div className="hero__crafted-by">
          <a href="https://hackerone.com" className="hero__crafted-by-link">
            Crafted by{" "}
            <img
              src={logo}
              className="hero__image"
              alt="HackerOne"
              title="HackerOne"
            />
          </a>
        </div>
        <div className="hero__example">
          <Example />
        </div>
      </div>
    </div>
    <div className="wrapper">
      <h1>React Datepicker</h1>
      <p className="badges">
        <a href="https://npmjs.org/package/react-datepicker">
          <img
            src="https://badge.fury.io/js/react-datepicker.svg"
            alt="NPM package version badge"
            className="badge"
          />
        </a>
        <a href="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml">
          <img
            src="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml/badge.svg"
            alt="Test suite status badge"
            className="badge"
          />
        </a>
        <a href="https://david-dm.org/Hacker0x01/react-datepicker">
          <img
            src="https://david-dm.org/Hacker0x01/react-datepicker.svg"
            alt="Dependency status badge"
            className="badge"
          />
        </a>
        <a href={"https://npmjs.org/package/react-datepicker"}>
          <img
            src="https://img.shields.io/npm/dm/react-datepicker.svg"
            alt="Download count badge"
            className="badge"
          />
        </a>
      </p>
      <p>A simple and reusable datepicker component for React.</p>

      <h2>Installation</h2>
      <p>The package can be installed via NPM:</p>
      <p>
        <code>npm install react-datepicker --save</code>
      </p>
      <p>Or by using Yarn:</p>
      <p>
        <code>yarn add react-datepicker</code>
      </p>
      <p>
        Below are examples which also can be edited directly via the editor on
        the left side and will be rendered on the right.
      </p>
    </div>
    <div className="wrapper">
      <ExampleComponents />
    </div>

    <a href="https://github.com/Hacker0x01/react-datepicker/">
      <img className="github-ribbon" src={ribbon} alt="Fork me on GitHub" />
    </a>
  </div>
);

export default Root;
