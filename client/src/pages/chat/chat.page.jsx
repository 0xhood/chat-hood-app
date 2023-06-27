import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/axiosInstance';

function chatPage() {
    const [chats, setChats] = useState([]);
    const fetch = async () => {
        const data = await axiosInstance.get('chats');
        setChats(data.data);
    }
    useEffect(() => {
        fetch()
    }, [])
  return (
    <div>{chats.map((chat, i) => <p key={i}>{chat.chatName}</p>)}</div>
  )
}

export default chatPage