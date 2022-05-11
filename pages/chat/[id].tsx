import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import {useCollectionData, useCollection} from "react-firebase-hooks/firestore";
import { collection, doc, serverTimestamp, addDoc, onSnapshot, getFirestore, where, query, orderBy  } from "firebase/firestore"; 
import { ChatContext, Context } from "../_app";
import { Row, Col, Input, Button } from "antd";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const Chat = (): JSX.Element => {
    const router = useRouter();
    const {db, app} = useContext(ChatContext);
    const {store} = useContext(Context);
    const [value, setValue] = useState("");
    const chatRef = collection(getFirestore(app), "messages");
    const q1 = query(chatRef, where("channelId", "in", [router.query?.id]));

    const [messages, loading, error] = useCollectionData(
        q1,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const user = toJS(store.user);
    const sendMessage = async (): Promise<void> => {
        await addDoc(collection(db, "messages"), {
            id: uuidv4(),
            userId: user.id,
            channelId: router.query?.id,
            name: user.firstName + " " + user.lastName,
            text: value,
            createdAt: serverTimestamp()
        });
        setValue("");
    };
    console.log(messages);
    return (
        <div style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
                <Col span={24}>
                    <div className={styles.chat}>
                        <div className={styles.messages}>
                            {messages?.sort((a, b) => a.createdAt?.seconds - b.createdAt?.seconds)?.map(mes => (
                            <div className={styles.message_wrapper} key={mes?.id + mes.userId}>
                                <div className={styles.message_author}>{mes.name}</div>
                                <div className={styles.message}>{mes.text}</div>
                            </div>
                            ))}
                        </div>
                        <div className={styles.input_wrapper}>
                            <Input.Group compact>
                                <Input value={value} onChange={(e) => setValue(e.target.value)} className={styles.input}/>
                                <Button type="primary" onClick={sendMessage}>Send</Button>
                            </Input.Group>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default observer(Chat);