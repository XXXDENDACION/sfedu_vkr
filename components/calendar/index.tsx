import React, { ComponentType, FunctionComponent, useState } from "react";
import { Calendar as BigCalendar, CalendarProps, Event, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Calendar: FunctionComponent = () => {
  const DndCalendar = withDragAndDrop(BigCalendar as ComponentType<CalendarProps>);

  const [events, setEvents] = useState<Event[]>([
      {
        title: "Board meeting",
        start: new Date(2018, 0, 29, 9, 0, 0),
        end: new Date(2018, 0, 29, 13, 0, 0),
        resource: 1
      },
      {
        title: "MS training",
        allDay: true,
        start: new Date(),
        end: new Date(),
        resource: 2
      },
      {
        title: "Team lead meeting",
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resource: 3
      },
      {
        title: "Birthday Party",
        start: new Date(2018, 0, 30, 7, 0, 0),
        end: new Date(2018, 0, 30, 10, 30, 0),
        resource: 4
      }
    ]);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const onSelectEvent = (event: Event): void => {
    setSelectedEvent(event);
  };

  const onEventDrop = ({event, start, end}): void => {
  const idx = events.indexOf(event);
  const updateEvent = { ...event, start, end };

  const nextEvents = [...events];
  nextEvents.splice(idx, 1, updateEvent);

  setEvents(nextEvents);
  };


  return (
    <div>
        <DndCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={onSelectEvent}
            onEventDrop={onEventDrop}
            draggableAccessor={() => true}
            style={{ height: 500 }}
        />
    </div>
);
};


export default Calendar;