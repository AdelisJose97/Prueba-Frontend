import React, { useEffect, useState } from 'react'
import { Table, Checkbox, Space } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { fetchTask, changeStatus } from '../../Store/taskSlice'

import './index.css'

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks)
  const hasError = useSelector((state) => state.task.hasError)
  const dispatch = useDispatch()
  const handleChange = (e, id) => {
    const checked = e.target.checked
    dispatch(changeStatus({
      id,
      status: checked
    }))
  }

  useEffect(() => {
    dispatch(fetchTask)

  }, [])

  const columns = [
    {
      title: 'UserId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      key: 'completed',
      render: (text, record) => (
        <Checkbox onChange={(e) => handleChange(e, record.id)} checked={record.completed}>{record.completed == false ? 'No realizada' : 'Realizada'}</Checkbox>
      ),
    },
  ];

  return (
    <div className="task-container">
      <Table
        dataSource={tasks}
        columns={columns}
        rowKey="id"
      />
    </div>
  )
}

export default Tasks