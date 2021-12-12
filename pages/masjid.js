import react, {useState} from 'react'
import styles from '../styles/Home.module.css'
import { Select, Button } from 'antd';
import { useRouter } from 'next/router'


const { Option } = Select;

const Masjid = () => {
    const router = useRouter()
    const [daerah, setDaerah] = useState('')

    function handleChange(value) {
        setDaerah(value)
    }

    const changePage = (e, selMas) => {
        e.preventDefault();
        router.push(selMas)
    }

    const logout = () => {
        console.log('hehe')
        router.push('./')
    }

    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>PILIH DAERAH</h1>
            <Select defaultValue="Pilih Daerah" style={{ width: 120 }} onChange={handleChange}>
                <Option value="kopo">Kopo</Option>
                <Option value="soreang">Soreang</Option>
            </Select>
            <br/>
            <br/>
            <br/>
            
            {daerah === "kopo" && <div><h2 onClick={(e) => changePage(e, 'taqwa')} name="taqwa">Masjid At-Taqwa</h2></div>}
            {daerah === "soreang" && <div><h2 onClick={(e) => changePage(e, 'anur')} name="anur">Masjid An-Nur</h2></div>}
            <br/>
            <br/>
            <br/>
            <Button onClick={logout}>Logout</Button>
        </div>
        </div>
    )
}

export default Masjid;
