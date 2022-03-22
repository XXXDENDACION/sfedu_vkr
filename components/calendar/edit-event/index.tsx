import React from "react";
import styles from "../style.module.css";
import {Event} from "react-big-calendar";
import {Button, Form, Input, Typography, DatePicker} from "antd";

interface IEditEvent {
    selectedEvent: Event | null | undefined;
    form: any;
    onFinish: (values) => void;
    dateFormat: string;
}

const EditEvent = (props: IEditEvent) => {
    const {selectedEvent, form, onFinish, dateFormat} = props;
    return (
        <div className={styles.formWrapper}>
            {selectedEvent && (
                <Form
                    name="eventDetails"
                    form={form}
                    onFinish={onFinish}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <Typography.Title className={styles.title} level={2}>Детали события</Typography.Title>
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
                        <DatePicker.RangePicker
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
    );
};

export default EditEvent;