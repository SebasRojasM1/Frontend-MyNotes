"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons';

interface Note {
    _id: string;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}


export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get<Note[]>("http://localhost:3000/notes/all");
                setNotes(res.data);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };

        fetchNotes();
    }, []);

    const handleDelete = async (id: string) => {
        try {
          await axios.delete(`http://localhost:3000/notes/delete/${id}`);
          // Actualiza el estado para eliminar la nota de la vista
          setNotes(notes.filter(note => note._id !== id));
        } catch (error) {
          console.error("Error deleting note:", error);
        }
      };

    return (
        <section className="w-full max-w-4xl justify-center overflow-x-auto my-10 mx-auto">
            <Link
                className="bg-[#2a6675] text-white px-5 py-2 rounded-lg mb-4 hover:bg-[#1f4c57] transition ease-in-out delay-30"
                href="/create"
                >
                Add note <FontAwesomeIcon icon={faBook} />
            </Link>

            <table className="my-6 shadow-md border-collapse border-solid border-2 border-[#2a6675] w-full">
                <thead className="border-solid border-2 border-[#2a6675] bg-[#4098ae]">
                    <tr>
                        <th className="w-3/12">Title</th>
                        <th className="w-6/12">Note</th>
                        <th className="w-3/12">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {notes.map((note) => (
                        <tr key={note._id} className="border-solid border-2 border-[#2a6675]">
                            <td>{note.title}</td>
                            
                            <td>{note.body}</td>

                            <td className="flex justify-evenly items-center">
                                <Link
                                    href={`/update/${note._id}`}
                                    className="bg-amber-300 py-1 px-6 rounded-xl font-bold hover:bg-amber-400 transition ease-in-out delay-30"
                                >
                                    Edit
                                </Link>

                                <p onClick={() => handleDelete(note._id)} className="bg-red-700 py-1 px-6 rounded-xl text-white font-bold hover:bg-red-800 transition ease-in-out delay-30 cursor-pointer">
                                    Delete
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}