import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';
import { Form, Input, Button, notification, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Register() {
  const router = useRouter()

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Register Berhasil',
    });
  };

const onFinish = (values) => {
    openNotificationWithIcon('success')
    setTimeout(() => {
      router.push('./')
    }, 500);
};

    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>Register Akun</h2>
        <Form
      name="normal_login"
      className={styles['login-form']}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Select defaultValue="Pilih Pengguna">
          <Select.Option value="jamaah">Jamaah</Select.Option>
          <Select.Option value="masjid">Masjid</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
          Register
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
    )
}

export default Register
