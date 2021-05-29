import { Form, Input, Button, Checkbox, Tabs, Select } from "antd";
import styles from "./style.module.css";
import * as uiIcons from "../../components/icons/blackicon";
import { Typography } from "antd";
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
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <uiIcons.BlackLogo />
          <Typography.Text className={styles.header_text}>
            Лаборатория интернет- проектов
          </Typography.Text>
        </div>
        <Typography className={styles.text}>
          “Лаборатория интернет-проектов IT Premium” – это веб-портал для
          обучающихся, преподавателей (и управленцев ВУЗа) и представителей ИТ
          компании (инженеров, разработчиков, QA, дизайнеров, PM), созданный с
          целью организации единого информационного пространства для
          осуществления совместной научно-технической деятельности, совместной
          работы над проектами (проектная деятельность, курсовые, ВКР,
          стажировки и практики, стартапы)
        </Typography>
      </div>
      <div className={styles.form}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Логин" key="1">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                className={styles.input}
                name="username"
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

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Запомнить</Checkbox>
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Имя" />
              </Form.Item>

              <Form.Item
                name="surname"
                rules={[
                  { required: true, message: "Please input your surname!" },
                ]}
              >
                <Input placeholder="Фамилия" />
              </Form.Item>
              <Form.Item
                className={styles.input}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="pasword"
                rules={[
                  { required: true, message: "Please input your pasword!" },
                ]}
              >
                <Input.Password placeholder="Подтвердите пароль" />
              </Form.Item>

              <Form.Item
                name="role"
                rules={[{ required: true, message: "Please input your role!" }]}
              >
                <Select placeholder="Выберите роль" allowClear>
                  <Option value="Frontend Developer">Frontend Developer</Option>
                  <Option value="Backend Developer">Backend Developer</Option>
                  <Option value="DevOps">DevOps</Option>
                  <Option value="Q/A">Q/A</Option>
                  <Option value="Designer">Designer</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="status"
                rules={[
                  { required: true, message: "Please input your status!" },
                ]}
              >
                <Select placeholder="Выберите статус" allowClear>
                  <Option value="Студент">Студент</Option>
                  <Option value="Преподаватель">Преподаватель</Option>
                  <Option value="Представитель IT компании">
                    Представитель IT компании
                  </Option>
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
