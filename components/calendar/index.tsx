import React, { ComponentType, FunctionComponent, useState } from "react";
import styles from "./style.module.css";
import { Form, Input, Button, DatePicker, Typography } from "antd";
import { Calendar as BigCalendar, CalendarProps, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import EditEvent from "./edit-event";

const localizer = momentLocalizer(moment);

const dateFormat = "YYYY/MM/DD HH:mm";

const Calendar: FunctionComponent = () => {
  const DndCalendar = withDragAndDrop(BigCalendar as ComponentType<CalendarProps>);
  const [form] = Form.useForm();
  const [events, setEvents] = useState<Event[]>([
      {
        title: "MS training",
        allDay: true,
        start: new Date(),
        end: new Date(),
        resource: {
          id: 2,
          description: "",
        }
      },
    ]);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const onSelectEvent = (event: Event): void => {
    setSelectedEvent(event);
    form.setFieldsValue({
      title: event.title,
      description: event.resource.description,
      rangePicker: [moment(event.start, dateFormat), moment(event.end, dateFormat)]
    });
  };

  const onEventDrop = ({event, start, end}): void => {
    const idx = events.indexOf(event);
    const updateEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updateEvent);

    setEvents(nextEvents);
  };

  const onFinish = (values): void => {
    const { description, title, rangePicker } = values;
    const idx = events.indexOf(selectedEvent);
    const updateEvent = { ...selectedEvent, title, start: rangePicker[0]._d, end: rangePicker[1]._d, resource: { description }};

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
        <EditEvent
            selectedEvent={selectedEvent}
            dateFormat={dateFormat}
            form={form}
            onFinish={onFinish}
        />
    </div>
);
};


export default Calendar;