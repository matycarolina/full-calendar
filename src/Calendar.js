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
      const { type, doctor, surgery, patient, status } = event.extendedProps;
      const { borderColor } = event;
      const { start, end } = event;
      console.log(event);
      console.log(start);
      return (
        <div
          className={`bg-${type} text-${type}-text`}
          style={{ borderColor: borderColor, width: "100%" }}
        >
          <p>{`${start?.getHours()}:${start?.getMinutes()} - ${end?.getHours()}:${end?.getMinutes()}`}</p>
          <b>{patient}</b>
          <p>{doctor}</p>
          <p>{surgery}</p>

          {status === "Pendiente" && (
            <div className={`text-${status}-text`}>
              <img
                src={eventInfo.event.url}
                style={{ width: "30px" }}
                alt={eventInfo.event.title}
              />
              <span>{status}</span>
            </div>
          )}
        </div>
      );
    }
    return (
      <FullCalendar
        plugins={[dayGridPlugin, bootstrapPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next title",

          end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        eventContent={renderEventContent}
        events={[
          {
            extendedProps: {
              type: "appointments",
              patient: "Raul Salinas",
              doctor: "Dr. Vicente Garcia",
              surgery: "Apendicectomia",
              status: "Pendiente",
            },
            start: "2021-11-06T11:00:00",
            end: "2021-11-06T12:30:00",
            url: "https://res.cloudinary.com/dekqenh3y/image/upload/v1638303770/llamada-telefonica_v5ba31.png",
          },
          {
            title: "Meditation",
            extendedProps: {
              type: "appointments",
              patient: "Carolina Murillo",
              doctor: "Dr. Xavier Serrano",
              surgery: "Colecistectomia",
              status: "Pendiente",
            },
            start: "2021-11-10T10:00:00",
            end: "2021-11-10T11:00:00",
            url: "https://res.cloudinary.com/dekqenh3y/image/upload/v1638303770/llamada-telefonica_v5ba31.png",
          },
          {
            title: "Doctor's Appointment",
            extendedProps: {
              type: "appointments",
              patient: "Santiago Rojas",
              doctor: "Dr. Alberto Perez",
              surgery: "Sutura fractura expuesta",
              status: "Pendiente",
            },
            start: "2021-11-12T06:00:00",
            end: "2021-11-12T08:00:00",
            url: "https://res.cloudinary.com/dekqenh3y/image/upload/v1638303770/llamada-telefonica_v5ba31.png",
          },
          {
            title: "Doctor's Appointment",
            extendedProps: {
              type: "appointments",
              patient: "Santiago Rojas",
              doctor: "Dr. Alberto Perez",
              surgery: "Sutura fractura expuesta",
              status: "Completo",
            },
            start: "2021-11-12T08:00:00",
            end: "2021-11-12T10:00:00",
            url: "https://res.cloudinary.com/dekqenh3y/image/upload/v1638303770/llamada-telefonica_v5ba31.png",
          },
        ]}
      />
    );
  }
}
