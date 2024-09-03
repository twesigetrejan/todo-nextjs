'use client'

import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();

        await addTodo({
            id: '2',
            text: newTaskValue
        })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }
    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>Add new task
                <FaPlus className='' />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >

                <h3 className="fnt-bold text-xl">Add new task</h3>
                <form onSubmit={handleSubmitTodo}>
                    <div className="modal-action mx-auto flex flex-col">
                        <input
                            value={newTaskValue}
                            onChange={(e) => setNewTaskValue(e.target.value)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-info w-full max-w-xs mx-auto" />
                        <div className=" pt-4">
                            <button className='btn'>Submit</button>
                        </div>
                    </div>
                </form>

            </Modal>
        </div>
    )
}
export default AddTask
