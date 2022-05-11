import React, { ComponentType, FunctionComponent, useState } from "react";
import styles from "./style.module.css";
import { Form, Button } from "antd";
import { PlusCircleOutlined as Plus } from "@ant-design/icons";
import { Calendar as BigCalendar, CalendarProps, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import EditEvent from "./edit-event";
import CreateEvent from "./create-event";
import { observer } from "mobx-react-lite";
import { eventStore } from "../../mobx/store/eventStore";
import { toJS } from "mobx";
import { IEvent } from "../../utils/interfaces";

const localizer = momentLocalizer(moment);

const dateFormat = "YYYY/MM/DD HH:mm";

const Calendar: FunctionComponent = () => {
  const { eventsUser, createEvent } = eventStore;
  console.log(toJS(eventsUser));
  const DndCalendar = withDragAndDrop(BigCalendar as ComponentType<CalendarProps>);
  const [form] = Form.useForm();
  const [events, setEvents] = useState<Event[]>(eventsUser);
  
  const [selectedEvent, setSelectedEvent] = useState<IEvent>();
  const [isNewEvent, setIsNewEvent] = useState<boolean>(false);

  const onSelectEvent = (event: IEvent): void => {
    setSelectedEvent(event);
    setIsNewEvent(false);
    form.setFieldsValue({
      title: event.title,
      description: event.description,
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

  const onEdit = (values): void => {
    const { description, title, rangePicker } = values;
    const idx = events.indexOf(selectedEvent);
    const updateEvent = { ...selectedEvent, title, start: rangePicker[0]._d, end: rangePicker[1]._d, resource: { description }};

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updateEvent);

    setEvents(nextEvents);
    setSelectedEvent(null);
  };

  const onAdd = (): void => {
    setIsNewEvent(true);
    setSelectedEvent(null);
  };

  const onCreate = (values): void => {
    console.log(values);
    form.setFieldsValue(values);
    const newEvent = {
      title: values.title,
      start: moment(values.rangePicker[0]).toDate(),
      end: moment(values.rangePicker[1]).toDate(),
      description: values.description,
      ownerId: 1,
      participants: values.select
    };
    console.log(moment(values.rangePicker[0]).toDate());
    createEvent(newEvent);
    // setEvents((prevState) => ([...prevState, newEvent]));
    setIsNewEvent(false);
  };

  return (
    <div>
      <Button onClick={onAdd} className={styles.addButton} type="primary" >Добавить событие</Button>
        <DndCalendar
            localizer={localizer}
            events={eventsUser}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={onSelectEvent}
            onEventDrop={onEventDrop}
            draggableAccessor={() => true}
            style={{ height: 500 }}
        />
        <div className={styles.formWrapper}>
          {selectedEvent && (
              <EditEvent
                selectedEvent={selectedEvent}
                dateFormat={dateFormat}
                form={form}
                onFinish={onEdit}
            />
          )}
          {isNewEvent && (
            <CreateEvent
                dateFormat={dateFormat}
                form={form}
                onFinish={onCreate}
            />
          )}
        </div>
    </div>
);
};


export default observer(Calendar);