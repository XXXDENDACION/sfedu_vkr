import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import {Select, Button, Form, Input, Typography, DatePicker} from "antd";
import { usersStore } from "../../../mobx/store/userStore";
import { toJS } from "mobx";

interface ICreateEvent {
    form: any;
    onFinish: (values) => void;
    dateFormat: string;
}

type IUserSelect = {
    value: number;
    label: string;
}

const CreateEvent = (props: ICreateEvent): JSX.Element => {
    const {form, onFinish, dateFormat} = props;
    const {users} = usersStore;
    const [selectUsers, setSelectUsers] = useState<IUserSelect[]>([]);
    
    useEffect(() => {
        setSelectUsers(convertDataToSelect(users));
    }, [users]);

    function convertDataToSelect(users): IUserSelect[] {
        return users.map(user => ({value: user.id, label: user.firstName + " " + user.lastName}));
    }

    function handleChange(value): void {
        console.log(`selected ${value}`);
      }

    return (
        <div>
            <Form
                name="eventDetails"
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
            >
                <Typography.Title className={styles.title} level={2}>Создать событие</Typography.Title>
                <Form.Item
                    label="Название"
                    name="title"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Описание"
                    name="description"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Выберите время"
                    name="rangePicker"
                >
                    <DatePicker.RangePicker
                        format={dateFormat}
                        showTime
                    />
                </Form.Item>
                <Form.Item
                    label="Участники"
                    name="select"
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        onChange={handleChange}
                    >
                        {selectUsers.map(user => (
                            <Select.Option key={user.value}>{user.label}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 8, offset: 8 }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateEvent;