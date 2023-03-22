'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import Input from './Input';
import { createNewPost } from '@/lib/api';
import { useRouter } from 'next/navigation';

Modal.setAppElement('#modal');

const NewPost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hero, setHero] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewPost({
      title,
      content,
      hero,
      author: 'New User',
    });
    closeModal();
    setTitle('');
    setContent('');
    setHero('');
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={openModal}>+ New Post</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,0.3)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-white rounded-lg p-8"
      >
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl">New Post</h1>
            <button
              onClick={closeModal}
              className="font-bold border rounded border-red-500 text-red-500 px-2"
            >
              X
            </button>
          </div>
          <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Content"
              type="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Input
              placeholder="Image Link"
              type="text"
              value={hero}
              onChange={(e) => setHero(e.target.value)}
            />
            <button
              type="submit"
              className="mt-8 border border-blue-500 text-blue-500 rounded-lg py-2 px-4"
            >
              Submit
            </button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default NewPost;
