'use client';

import { ChangeEvent, useState } from 'react';
import Modal from 'react-modal';
import Input from './Input';
import { createNewPost } from '@/lib/api';
import { useRouter } from 'next/navigation';

Modal.setAppElement('#modal');

const cloudinaryImages = [
  { value: 'cld-sample-2', desc: 'Dalmation' },
  { value: 'cld-sample-2', desc: 'Mountains' },
  { value: 'cld-sample-3', desc: 'Basketball' },
  { value: 'cld-sample-4', desc: 'Dinner' },
  { value: 'cld-sample-5', desc: 'Trainer' },
];

const NewPost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hero, setHero] = useState(cloudinaryImages[0].value);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
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
    setHero(cloudinaryImages[0].value);
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={openModal} className="border border-blue-400 py-1 px-2 rounded">
        + New Post
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,0.3)] flex justify-center items-center absolute top-0 left-0 h-full w-screen"
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Content"
              type="textarea"
              value={content}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
            />
            <div className="flex w-full justify-between">
              <p>Image:</p>
              <select
                placeholder="Image"
                defaultValue={hero}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setHero(e.target.value)}
              >
                {cloudinaryImages.map((img) => (
                  <option value={img.value} key={img.value}>
                    {img.desc}
                  </option>
                ))}
              </select>
            </div>
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
