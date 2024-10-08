'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

export default function UpdateNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter(); 
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; // Asegura que el id esté disponible antes de continuar

    const fetchNote = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://backend-mynotes-297f.onrender.com/notes/${id}`);
        const note = response.data;
        setTitle(note.title);
        setBody(note.body);
      } catch (err) {
        setError("Error fetching note details");
        console.error("Error fetching note:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.put(`https://backend-mynotes-297f.onrender.com/notes/update/${id}`, {
        title,
        body,
      });

      console.log("Note updated:", response.data);
      setSuccess("Note updated successfully!"); // Establecer el mensaje de éxito

      router.push('/');
    } catch (err) {
      setError("Error updating note");
      console.error("Error updating note:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col my-14 align-center border-solid border-2 border-[#2a6675] rounded-md px-6 py-8 shadow-2xl">
      <h2 className="mb-6 text-center bg-[#4098ae] text-white py-2 px-10 font-bold uppercase text-2xl">
        Update note
      </h2>

      <label className="font-bold text-[#4098ae]" htmlFor="title">
        Title
      </label>
      <input
        className="mt-2 border-b-2 border-solid border-[#2a6675] focus:outline-none"
        type="text"
        name="title"
        id="title"
        placeholder="Title of the note"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Actualizar el estado del título
      />

      <label className="font-bold text-[#4098ae] mt-4" htmlFor="body">
        Content
      </label>
      <textarea
        className="mt-2 border-b-2 border-solid border-[#2a6675]"
        name="body"
        id="body"
        placeholder="Content of the note"
        value={body}
        onChange={(e) => setBody(e.target.value)} // Actualizar el estado del contenido
      ></textarea>

      <button
        type="submit"
        className="bg-[#4098ae] border-b-2 mt-4 py-1 px-6 rounded-xl text-white font-bold hover:bg-[#2a6675] transition ease-in-out delay-30 cursor-pointer"
        disabled={loading} // Deshabilitar el botón mientras se envía la solicitud
      >
        {loading ? "Updating..." : "Update"}
      </button>

      {error && <p className="text-red-500 mt-2 text-center font-bold">{error}</p>}

      {success && <p className="text-green-500 mt-2 text-center font-bold">{success}</p>}
    </form>

  );
}