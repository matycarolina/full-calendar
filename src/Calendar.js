import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
//import interactionPlugin from "@fullcalendar/interaction"; 

export default class Calendar extends React.Component {
  render() {
    function renderEventContent(eventInfo) {
      return (
        <div>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
          <img src={eventInfo.event.url} />
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
          { title: "event 3", date: "2021-11-12", backgroundColor: "red" },
          {
            title: "event 4",
            date: "2021-11-12",
            backgroundColor: "purple",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.share-now.com%2F&psig=AOvVaw0Weq06Brzu67Y3Ye85t2m0&ust=1637458345993000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiJ3e7lpfQCFQAAAAAdAAAAABAD",
          },
          {
            title: "event 5",
            date: "2021-11-13",
            backgroundColor: "pink",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jaguar.in%2Findex.html&psig=AOvVaw0Weq06Brzu67Y3Ye85t2m0&ust=1637458345993000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiJ3e7lpfQCFQAAAAAdAAAAABAI",
          },
        ]}
      />
    );
  }
}
