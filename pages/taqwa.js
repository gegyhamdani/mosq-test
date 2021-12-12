import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
import { useRouter } from 'next/router'
import { Card } from 'antd';
import { Divider, Modal, Input, notification } from 'antd';

function Taqwa() {
    const router = useRouter();
    const [zakat, setZakat] = useState(0)
    const [qurban, setQurban] = useState(0)
    const [totalZakat, setTotalZakat] = useState(0)
    const [totalQurban, setTotalQurban] = useState(0);
    const [zakatModal, setZakatModal] = useState(false)
    const [qurbanModal, setQurbanModal] = useState(false);

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Transfer Berhasil',
        });
      };

    const showZakat = () => {
        setZakatModal(true);
    };
    
    const handleOkZakat = () => {
        const total = Number(totalZakat) + Number(zakat)
        setTotalZakat(total);
        openNotificationWithIcon('success')
        setZakatModal(false);
        setZakat(0)
    };
    
    const handleCancelZakat = () => {
        setZakatModal(false);
        setZakat(0)
    };

    const showQurban = () => {
        setQurbanModal(true);
    };
    
    const handleOkQurban = () => {
        const total = Number(totalQurban) + Number(qurban)
        setTotalQurban(total);
        openNotificationWithIcon('success')
        setQurbanModal(false);
        setQurban(0)
    };
    
    const handleCancelQurban = () => {
        setQurbanModal(false);
    };

    const onChangeZakat = (e) => {
        setZakat(e.target.value)
    }

    const onChangeQurban = (e) => {
        setQurban(e.target.value)
    }

    const back = () => {
        router.push('masjid')
    }
    return (
        <div className={styles.container}>
        <Button type="primary" style={{marginTop: '3em', marginLeft: '3em'}} onClick={back}>Kembali</Button>
        <div className={styles.wrapper}>
            <h2>Masjid At-Taqwa</h2>
            <br/>
            <h3>Kebutuhan: </h3>
            <Card
              cover={
                <img
                    alt="example"
                    src="https://mmc.tirto.id/image/2019/05/09/ilustrasi-zakat-istockphoto-1_ratio-16x9.jpg"
                />
                } 
            title="Zakat" extra={<a onClick={showZakat}>TRANSFER</a>} style={{ width: 500 }}>
                <p>Zakat Untuk Masjid At-Taqwa</p>
                <Divider />
                <p>Rp. {totalZakat}</p>
            </Card>
            <br/>
            <Card   
            cover={
                <img
                    alt="example"
                    src="https://narahubung.id/wp-content/uploads/2020/07/cow-goat_57812-2.jpg"
                />
                } 
                title="Qurban" extra={Number(totalQurban) <= 1000000 && <a onClick={showQurban}>TRANSFER</a>} style={{ width: 500 }}>
                <p>Qurban Untuk Masjid At-Taqwa membutuhkan dana Rp. 1000000</p>
                {Number(totalQurban) >= 1000000 && <p style={{color: 'blue'}}>Qurban untuk Masjid At-Taqwa sudah memenuhi kebutuhan</p>}
                <Divider />
                <p>Rp. {totalQurban}</p>
            </Card>
            <Modal title="Transfer Zakat" visible={zakatModal} onOk={handleOkZakat} onCancel={handleCancelZakat}>
                <p>Transfer Zakat Sebesar</p>
                <Input addonBefore="Rp." onChange={onChangeZakat} value={zakat}/>
            </Modal>
            <Modal title="Transfer Qurban" visible={qurbanModal} onOk={handleOkQurban} onCancel={handleCancelQurban}>
                <p>Transfer Qurban Sebesar</p>
                <Input addonBefore="Rp." onChange={onChangeQurban} value={qurban}/>
            </Modal>
        </div>
        </div>
    )
}

export default Taqwa
