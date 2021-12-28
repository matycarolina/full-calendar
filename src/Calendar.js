import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import axios from "axios";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/custom.scss";

function Calendar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users/list/all-data").then(function (response) {
      setData(response.data);
    });
  }, []);
  function renderEventContent(eventInfo) {
    const { event } = eventInfo;
    const { type, doctor, surgery, patient, status, resourceId } =
      event.extendedProps;
    const { borderColor } = event;
    const { start, end } = event;
    console.log(event);
    console.log(resourceId);
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
      schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
      plugins={[
        dayGridPlugin,
        bootstrapPlugin,
        timeGridPlugin,
        listPlugin,
        resourceTimeGridPlugin,
        resourceTimelinePlugin,
      ]}
      initialView="resourceTimeGridDay"
      resources={[
        { id: "1", title: "Quirofano 1" },
        { id: "2", title: "Quirofano 2" },
        { id: "3", title: "Quirofano 3" },
      ]}
      headerToolbar={{
        start: "prev,next title",

        end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      }}
      eventContent={renderEventContent}
      events={data}
      
    />
  );
}
export default Calendar;
