import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Form, Input, Button, notification, Upload } from 'antd';
import { UserOutlined, LockOutlined, InboxOutlined  } from '@ant-design/icons';

function Mosque() {
    const router = useRouter()

    const back = () => {
        router.push('./')
    }

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Kebutuhan Terunggah',
        });
      };

    const onFinish = (values) => {
        openNotificationWithIcon('success')
    };

      
    const normFile = (e) => {
        console.log('Upload event:', e);
    
        if (Array.isArray(e)) {
        return e;
        }
    
        return e && e.fileList;
    };
  
    return (
        <div className={styles.container}>
        <Button type="primary" style={{marginTop: '3em', marginLeft: '3em'}} onClick={back}>LOGOUT</Button>
        <div className={styles.wrapper}>
        <Form
      name="normal_login"
      className={styles['login-form']}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="kebutuhan"
        rules={[
          {
            required: true,
            message: 'Isi Kebutuhan',
          },
        ]}
      >
        <Input placeholder="Nama Kebutuhan" />
      </Form.Item>
      <Form.Item
        name="jumlah"
        rules={[
          {
            required: true,
            message: 'Isi Kebutuhan',
          },
        ]}
      >
        <Input placeholder="Jumlah Kebutuhan (Rp.)" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
          Submit
        </Button>
      </Form.Item>
    </Form>
            
        </div>
        </div>
    )
}

export default Mosque
