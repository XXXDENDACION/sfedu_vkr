import { Form, Input, Button, Checkbox, Tabs, Select } from "antd";
import styles from "./style.module.css";
import * as uiIcons from "../../components/icons/blackicon";
import { Typography } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { authStore } from "../../mobx/store/authStore";
const { Option } = Select;
const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
export default function Signup() {
  const router = useRouter();
  const submitSignup = async (values: any) => {
    try {
      console.log("Success:", values);
      const user = await axios({
        method: "post",
        url: "http://157.230.26.253/api/register",
        headers: {
          "Content-Type": "application/json",
          Bearer: localStorage.getItem("token"),
        },
        data: values,
      });
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  const submitLogin = async (values: any) => {
    try {
      await authStore.login(values.email, values.password);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <uiIcons.BlackLogo />
        </div>
      </div>
      <div className={styles.form}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Логин" key="1">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={submitLogin}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                className={styles.input}
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Логин" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Пароль" />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button name="signin" type="primary" htmlType="submit">
                  Авторизоваться
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Регистрация" key="3">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={submitSignup}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="first_name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Имя" />
              </Form.Item>

              <Form.Item
                name="last_name"
                rules={[
                  { required: true, message: "Please input your surname!" },
                ]}
              >
                <Input placeholder="Фамилия" />
              </Form.Item>
              <Form.Item
                className={styles.input}
                name="email"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your pasword!" },
                ]}
              >
                <Input.Password placeholder="Пароль" />
              </Form.Item>

              <Form.Item
                name="role_id"
                rules={[{ required: true, message: "Please input your role!" }]}
              >
                <Select placeholder="Выберите роль" allowClear>
                  <Option value="1">Frontend Developer</Option>
                  <Option value="2">Backend Developer</Option>
                  <Option value="3">DevOps</Option>
                  <Option value="4">Q/A</Option>
                  <Option value="5">Designer</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="user_status_id"
                rules={[
                  { required: true, message: "Please input your status!" },
                ]}
              >
                <Select placeholder="Выберите статус" allowClear>
                  <Option value="1">Студент</Option>
                  <Option value="2">Преподаватель</Option>
                  <Option value="3">Представитель IT компании</Option>
                </Select>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  name="signup"
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                >
                  Зарегистрироваться
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
