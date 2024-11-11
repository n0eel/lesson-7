import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/ACTIONS'

function Form() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const likedList = useSelector(state => state.like)

    function handleSubmit(e) {
        e.preventDefault()
        const data = {username, age}

        dispatch({type:ACTIONS.create, payload: data})
        setUsername("")
        setAge("")
    }


  return (
    <form onSubmit={handleSubmit} className='w-[500px] mx-auto mt-10 space-y-3'>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} allowClear placeholder='Enter your name' type='text'/>
        <Input value={age} onChange={(e) => setAge(e.target.value)} allowClear placeholder='Enter your age' type='number'/>
        <Button className='w-full ' htmlType='submit' type='primary'>Submit</Button>
        <Button htmlType='submit' type='default'>Liked ({likedList.length})</Button>
    </form>
  )
}

export default Form