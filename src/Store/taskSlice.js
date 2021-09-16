import { createSlice } from '@reduxjs/toolkit'

import { notification } from 'antd'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        hasError: false
    },
    reducers: {
        setTasks: (state, action) => {
            let setArray = action.payload.map(task => ({
                ...task,
                completed: false
            }))

            state.tasks = setArray
        },

        changeStatus: (state, action) => {
            const { id, status } = action.payload
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: status
                    }
                }
                return task
            })
        },
        setError: (state) => {
            state.hasError = true
        }
    }
})
export const { setTasks, changeStatus, setError } = taskSlice.actions

export async function fetchTask(dispatch) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await response.json()
        dispatch(setTasks(data))
    } catch (error) {
        dispatch(setError())
        notification.error({
            message: 'Ocurrio un error al obtener la informacion',
            description:
                'Asegurate de acceder al endpoint adecuado',
        });

    }
}

export default taskSlice.reducer