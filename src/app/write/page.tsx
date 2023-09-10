"use client";
import styles from "./write.module.css";
import 'react-quill/dist/quill.bubble.css'
import Image from "next/image";
import ReactQuill from "react-quill";
import { useState } from "react";


export default function WrtitePage() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const toggleAdd = () => {
        setOpen((state) => !state)
    }
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <div className={styles.buttons}>
                    <button type="button" className={styles.button} onClick={toggleAdd}>
                        <Image src="/plus.png" width={16} height={16} alt="additional feaatures" />
                    </button>

                    {
                        open && (
                            <div className={styles.add}>
                                <button type="button" className={styles.addButton}>
                                    <Image src='/image.png' width={16} height={16} alt="add image" />
                                </button>
                                <button type="button" className={styles.addButton}>
                                    <Image src='/external.png' width={16} height={16} alt="add external link" />
                                </button>
                                <button type="button" className={styles.addButton}>
                                    <Image src='/video.png' width={16} height={16} alt="add video" />
                                </button>
                            </div>
                        )
                    }
                </div>

                <ReactQuill theme="bubble" className={styles.textArea} value={value} onChange={setValue} placeholder="Tell your story..." /> {/* onChange((value)=> setValue(value)) */}
                <button type="button" className={styles.publish}>Publish</button>
            </div>
        </div>
    )
}