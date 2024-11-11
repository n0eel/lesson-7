import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/ACTIONS'
import { Button, Input, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons'

function List() {
    const [updateModal, setUpdateModal] = useState(false)
    const dispatch = useDispatch()
    const userList = useSelector(state => state.todo)

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const [updateAge, setUpdateAge] = useState(null)

    function handleUpdateBtnClick(age) {
        setUpdateModal(true)
        setUpdateAge(age)
        const findUpdateUser = userList.find(item => item.age == age)
        setUsername(findUpdateUser.username)
        setAge(findUpdateUser.age)
    }

    function handleUpdateUser() {
        const data = {username, age}
        dispatch({type: ACTIONS.update, payload:{newData:data, age:updateAge}})
        setUpdateModal(false)
    }

    function handleLikeBtnClick(item) {
        dispatch({type: ACTIONS.like, payload:item})
    }

    localStorage.setItem("todos", JSON.stringify(userList))


  return (
    <>
        <ul className='w-[500px] mt-10 mx-auto space-y-4'>
            {userList.map((item, index) => (
             <li key={index} className='p-4 justify-between flex items-center bg-slate-200 border-[1px] border-blue-400 rounded-md'>
                <div className='flex items-center space-x-1'>
                    <span className='text-[20px]'>{index + 1}</span>
                    <strong className='text-[20px] font-bold'>{item.username} - {item.age}</strong>
                </div>
                <div className='flex items-center space-x-2'>
                    <Button onClick={() => dispatch({ type: ACTIONS.delete, payload: item.age})} style={{ borderColor: "red" }}>
                        <DeleteOutlined style={{ color: "red" }}/>
                    </Button>
                    <Button onClick={() => handleUpdateBtnClick(item.age)} style={{borderColor: "green"}}>
                        <EditOutlined style={{color: "green"}}/>
                    </Button>
                    <Button onClick={() => handleLikeBtnClick(item)} style={{borderColor: "gold"}}>
                        <LikeOutlined style={{color: "gold"}}/>
                    </Button>
                    <Button style={{borderColor: "blue"}}>
                        <MoreOutlined style={{color: "blue"}}/>
                    </Button>
                </div>
             </li>   
            ))}
        </ul>
        <Modal title="Update user" open={updateModal} onCancel={() => setUpdateModal(false)} onOk={handleUpdateUser}>
            <Input className='mb-3' value={username} onChange={(e) => setUsername(e.target.value)} type='text' allowClear placeholder='Enter your name'/>
            <Input value={age} onChange={(e) => setAge(e.target.value)} type='number' allowClear placeholder='Enter your age'/>
        </Modal>
    </>
  )
}

export default List