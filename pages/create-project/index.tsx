import React from "react";
import { Button, Card, Form, Input, Radio, Rate } from "antd";
import LayoutComponent from "../../components/layout";
import styles from "./style.module.css";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    lg: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

const CreateProject = () => {
  const [form] = Form.useForm();

  const onSubmit = async (values) => {
    console.log(values);
    const project = await axios({
      method: "post",
      url: "http://157.230.26.253/api/projects",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <LayoutComponent>
      <Card
        className={styles.card_title}
        title="Создание проекта"
        headStyle={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
        bodyStyle={{ padding: "0px" }}
      />
      <div className={styles.wrapper}>
        <Form
          form={form}
          {...formItemLayout}
          onFinish={onSubmit}
          initialValues={{
            rate: 2,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
            label="Название:"
          >
            <Input placeholder="Дайте название вашему проекту" />
          </Form.Item>
          <Form.Item
            name="target"
            label="Цель:"
            rules={[
              {
                required: true,
                message: "Please input target!",
              },
            ]}
          >
            <Input placeholder="Введите цели проекта" />
          </Form.Item>
          <Form.Item
            name="supposed_result"
            label="Предполагаемые результаты:"
            rules={[
              {
                required: true,
                message: "Please input your results!",
              },
            ]}
          >
            <Input.TextArea rows={3} placeholder="Введите текст" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Описание:"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea rows={3} placeholder="Введите описание" />
          </Form.Item>
          <Form.Item
            name="rate"
            label="Rate"
            rules={[
              {
                required: true,
                message: "Please input rating!",
              },
            ]}
          >
            <Rate />
          </Form.Item>
          <Form.Item name="is_public" label="Для кого:">
            <Radio.Group>
              <Radio value="1">Публичный</Radio>
              <Radio value="0">Команда</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LayoutComponent>
  );
};

export default CreateProject;
