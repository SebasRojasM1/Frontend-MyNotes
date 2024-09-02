export default function CreateNote() {
    return (
      <section className="flex flex-col my-14 align-center border-solid border-2 border-[#2a6675] rounded-md px-6 py-8 shadow-2xl">
            <h2 className="mb-6 text-center bg-[#4098ae] text-white py-2 px-10 font-bold	 uppercase text-2xl">Create note</h2>

            <label className="font-bold text-[#4098ae]" htmlFor="title">Title</label>
            <input className="mt-2 border-b-2 border-solid border-[#2a6675] focus:outline-none" type="text" name="title" id="title" placeholder="Title of the note"/>

            <label className="font-bold text-[#4098ae] mt-4 " htmlFor="content" >Content</label>
            <textarea className="mt-2 border-b-2 border-solid border-[#2a6675]" name="content" id="content" placeholder="Content of the note"></textarea>

            <button className="bg-[#4098ae] border-b-2 mt-4 py-1 px-6 rounded-xl text-white font-bold hover:bg-[#2a6675] transition ease-in-out delay-30 cursor-pointer">Done</button>
      </section>
    );
  }