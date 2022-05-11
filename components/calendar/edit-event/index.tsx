import React from "react";
import styles from "./style.module.css";
import {Button, Select, Form, Input, Typography, DatePicker} from "antd";
import { toJS } from "mobx";
import { IEvent } from "../../../utils/interfaces";
import { observer } from "mobx-react-lite";

interface IEditEvent {
    selectedEvent: IEvent | null | undefined;
    form: any;
    onFinish: (values) => void;
    dateFormat: string;
}

const EditEvent = (props: IEditEvent): JSX.Element => {
    const {selectedEvent, form, onFinish, dateFormat} = props;
    console.log((selectedEvent.participants.forEach(user => console.log(user.id))));

    return (
        <div>
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
                        label="Название"
                        name="title"
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        label="Описание"
                        name="description"
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        label="Время"
                        name="rangePicker"
                    >
                        <DatePicker.RangePicker
                            disabled
                            format={dateFormat}
                            showTime
                        />
                    </Form.Item>
                    <Form.Item
                        label="Участники"
                        name="select"
                >
                        {selectedEvent?.participants?.map(user => (
                            <p key={user.id}>
                                {user.firstName + " " + user.lastName}
                            </p>
                            )
                        )}
                    </Form.Item>
                    {/* <Form.Item
                        wrapperCol={{ span: 8, offset: 8 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            )}
        </div>
    );
};

export default observer(EditEvent);