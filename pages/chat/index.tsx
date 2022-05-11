import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Button, List, Modal, Typography, Select  } from "antd";
import router from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, getFirestore, query, serverTimestamp, where } from "firebase/firestore";
import { ChatContext, Context } from "../_app";
import { usersStore } from "../../mobx/store/userStore";
import { toJS } from "mobx";
import { v4 as uuidv4 } from "uuid";


const { Option } = Select;

const Chat = (): JSX.Element => {
    const { users } =  usersStore;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectUser, setSelectUser] = useState();
    const {store} = useContext(Context);
    const {db, app} = useContext(ChatContext);
    const channelsRef = collection(getFirestore(app), "channels");
    console.log(toJS(store.user));
    const q1 = query(channelsRef, where("ownerId", "==", store.user.id));
    const q2 = query(channelsRef, where("userId", "==", store.user.id));
    const [channelsOwner, loadingOwner, errorOwner] = useCollectionData(
        q1,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const [channelsRec, loadingRec, errorRec] = useCollectionData(
        q2,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const showModal = (): void => {
        setIsModalVisible(true);
    };

    const unShowModal = (): void => {
        setIsModalVisible(false);
    };
    
    const handleOkModal = (): void => {
        setIsModalVisible(false);
        createChat();
    };

    const createChat = async (): Promise<void> => {
        await addDoc(collection(db, "channels"), {
            id: uuidv4(),
            ownerId: store.user.id,
            userId: selectUser,
            createdAt: serverTimestamp()
        });
    };

    const handleChangeSelect = (value): void => {
        setSelectUser(value);
    };

    const displayUserName = (item): React.ReactNode => {
        if (item.ownerId === store.user.id) {
            const user = users.find(u => u.id === item.userId);
            return user.firstName + " " + user.lastName;
        }
        if (item.userId === store.user.id) {
            const user = users.find(u => u.id === item.ownerId);
            return user.firstName + " " + user.lastName;
        }
    };
    
    const channels = (channelsOwner && channelsRec) ? [...channelsOwner, ...channelsRec] : [];

    return (
        <div>
            <Modal title="Выберите пользователя" visible={isModalVisible} onOk={handleOkModal} onCancel={unShowModal}>
                <Select onChange={handleChangeSelect} style={{ width: "100%" }}>
                    {users?.map(u => (<Option key={u.id} value={u.id}>{u.firstName + " " + u.lastName}</Option>))}
                </Select>
            </Modal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography.Title>Чаты</Typography.Title>
                <Button onClick={showModal} type="primary">Начать чат</Button>
            </div>
            <List
                itemLayout="horizontal"
                dataSource={channels}
                renderItem={(item => (
                    <List.Item className={styles.channel} onClick={() => router.push(`chat/${item.id}`)}>
                        <List.Item.Meta
                            title={<Typography.Text>{displayUserName(item)}</Typography.Text>}
                            description={item.title}
                        />
                    </List.Item>
                ))}
            />
        </div>
    );
};

export default Chat;
