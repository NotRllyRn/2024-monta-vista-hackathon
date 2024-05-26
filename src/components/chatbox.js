import './ChatBox.css';
import React, { useEffect, useState } from 'react';
import ollama from 'ollama/browser'

function ChatBox () {

    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hi! I\'m your virtual teacher. What questions do you have?'
        },
    ])

    const [text, setText] = useState('')

    const [cooldown, setCooldown] = useState(false)

    function onPress(e) {
        if (e.key === 'Enter') {
            if (cooldown) return
            if (e.target.value === '') return

            setCooldown(true)
            setText('')
            setMessages([...messages, {
                role: 'user',
                content: text
            }])

            e.target.value = ''
        }
    }

    useEffect(() => {
        if (messages[messages.length - 1].role === 'assistant') return

        ollama.chat({
            model: 'llama3',
            messages: messages
        }).then((response) => {
            setMessages([...messages, {
                role: 'assistant',
                content: response.message.content
            }])
            setCooldown(false)
        })
    }, [messages])

    return (
        <header className='chatbox'>
            <header className='title-header'>
                <p className='outline'>
                    AI Teacher
                </p>
            </header>
            <div className='conversation-box'>
                {messages.map((message, index) => (
                    <div className='message' key={index}>
                        <div className={`${message.role}-message`}>
                            {message.content}
                        </div>
                    </div>
                ))}
                <input type='text' className='message-input' placeholder='Type a message...' onKeyPress={onPress} onChange={e => setText(e.target.value)}/>
            </div>
        </header>
    )
}

export default ChatBox;