import React, { ComponentType, FunctionComponent, useState } from "react";
import styles from "./style.module.css";
import { Form, Input, Button, DatePicker, Typography } from "antd";
import { Calendar as BigCalendar, CalendarProps, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const { Title } = Typography;
const { RangePicker } = DatePicker;
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
        <div className={styles.formWrapper}>
          {selectedEvent && (
            <Form
              name="eventDetails"
              form={form}
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Title className={styles.title} level={2}>Детали события</Title>
              <Form.Item
                label="title"
                name="title"
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="description"
                name="description"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="rangePicker"
                name="rangePicker"
              >
                <RangePicker 
                  format={dateFormat} 
                  showTime
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 8, offset: 8 }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
    </div>
);
};


export default Calendar;