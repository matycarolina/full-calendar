import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import logo from "./assets/images/logo192.png";

export default class Calendar extends React.Component {
  render() {
    function renderEventContent(eventInfo) {
      return (
        <div>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
          <img src={eventInfo.event.url} style={{ width: "100px" }} alt={eventInfo.event.title}/>
        </div>
      );
    }
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        events={[
          { title: "event 1", date: "2021-11-12" },
          { title: "event 2", date: "2021-11-12", backgroundColor: "green" },
          {
            title: "event 3",
            date: "2021-11-12",
            backgroundColor: "red",
            url: logo,
          },
          {
            title: "event 4",
            date: "2021-11-12",
            backgroundColor: "purple",
            url: "https://res.cloudinary.com/jnk/image/upload/v1617382778/sample.jpg",
          },
          {
            title: "event 5",
            date: "2021-11-13",
            backgroundColor: "pink",
            url: "https://res.cloudinary.com/dekqenh3y/image/upload/v1637620922/sample.jpg",
          },
        ]}
      />
    );
  }
}
