import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/custom.scss";

export default class Calendar extends React.Component {
  render() {
    function renderEventContent(eventInfo) {
      const { event } = eventInfo;
      const { type } = event.extendedProps;
      console.log(event);
      console.log(type);
      return (
        <div className={`bg-${type}`}>
          <b >{eventInfo.event.title}</b>
        </div>
      );
    }
    return (
      <FullCalendar
        plugins={[dayGridPlugin, bootstrapPlugin, timeGridPlugin, listPlugin]}
        themeSystem="bootstrap"
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next title",
          center:'',
          end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        eventContent={renderEventContent}
        events={[
          {
            title: "Dinner",
            date: "2021-11-17",
            extendedProps: {
              type: "food",
            },
          },
          {
            title: "Meditation",
            date: "2021-11-17",
            extendedProps: {
              type: "health",
            },
          },
          {
            title: "Doctor's Appointment",
            date: "2021-11-19",
            extendedProps: {
              type: "health",
            },
          },
        ]}
      />
    );
  }
}
