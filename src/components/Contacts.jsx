import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white h-full pt-52 text-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pt-9">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me or mail me to mdumar2405@gmail.com</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b71e29d6-ed3b-4e29-b980-8ce785008256"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;