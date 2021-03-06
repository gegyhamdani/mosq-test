import react, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Home() {
  const router = useRouter()

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Username Password Salah',
    });
  };

  const onFinish = (values) => {
    if(values.username === 'jamaah' || values.password === 'jamaah') {
       router.push('masjid')
    }
    else if(values.username === 'masjid' || values.password === 'masjid') {
      router.push('mosque')
    } else {
      openNotificationWithIcon('error')
    }
  };

  const register = () => {
    router.push('register')
  }

  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>E-MASJID</h1>
          <br/>
          <h2>LOGIN</h2>
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
        <Button type="link" className={styles['login-form-button']} onClick={register}>
          Register
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
          Log in
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}
