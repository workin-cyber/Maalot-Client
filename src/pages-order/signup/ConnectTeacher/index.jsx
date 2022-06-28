import styles from './style.module.css'
import InputTypes from '../../../components/common/inputTypes'
import Select_component from '../../../components/common/selectBar'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import { useState } from 'react'

// Creator : Team 3 - Yoni

function ConnectTeacher() {
    const [from, setFrom] = useState({})

    function change(e) {
        setFrom({ ...from, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault()
        console.log(from);
        e.target.reset()
    }

    return <>
        <div
            className={styles.div}>
            <div>

                <h2
                    className={styles.h2}>
                    Welcome John!
                </h2>
                <p
                    className={styles.p}
                >
                    Enter the classroom id and select the level
                </p>
            </div>
            <form onSubmit={submit}
            >
                <div>

                    <InputTypes
                        onChange={change}
                        type="text"
                        description="Classroom ID"
                        name="classroomID"
                    />
                    <Select_component
                        onChange={change}
                        levels={["Select The Reading Level", 5, 8, 9]}
                        name="level"
                    />
                </div>
                <div
                    className={styles.button}>
                    <Button_w140_w383_Link
                        type="submit"
                        text="submit"
                    />
                </div>
            </form>
        </div>

    </>
}


export default ConnectTeacher