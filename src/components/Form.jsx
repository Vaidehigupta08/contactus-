import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { ToastContainer, toast, Bounce } from 'react-toastify'; // ✅ Bounce added here
import 'react-toastify/dist/ReactToastify.css';



function Form() {
  const notify = () => toast.success( 
              Submithua && (
                <div className="text-[12px]">
                  <div>SUBMITTED 👍</div>
                  <div>{"Name : " + Name}</div>
                  <div>{"E-mail : " + Email}</div>
                  
                </div>
              )
            , {position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce, // ✅ This line gives color + animation
});

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Submithua, setSubmithua] = useState(false);

  const OnChat = () => {
    console.log("chat");
  };

  const OnCall = () => {
    console.log("call");
  };

  const OnSubmitbutton = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
    setSubmithua(true);
  };

  return (
    <>
      <div className="flex">
        <div>
          <div className="flex gap-3.5 ml-30 mt-8">
            <Button onClick={OnChat} text="VIA CHAT" />
            <Button onClick={OnCall} text="VIA CALL" />
          </div>

          <button className="w-[240px] h-[28px] border-gray-900 border-2 bg-white rounded-xl ml-32 mt-3 text-[12px] font-bold focus:bg-black focus:text-white">
            VIA E-MAIL FORM
          </button>

          <form onSubmit={OnSubmitbutton}>
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <Input
              label="E-mail"
              type="email"
              placeholder="Enter your Email-id"
              name="email"
            />

            <div className="relative mb-6 w-full max-w-sm mt-3 ml-32">
              <label
                htmlFor="message"
                className="absolute -top-2 left-4 bg-white px-1 text-[11px] font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                className="w-[240px] h-[45px] p-2 text-sm border-2 border-gray-900 rounded-2xl"
              />
            </div>

            <button
              onClick={notify}
              type="submit"
              className="w-[85px] h-[30px] bg-black border-2 border-white focus:bg-green-600 text-[15px] ml-70 text-white rounded-2xl"
            >
              SUBMIT
            </button>
<div className="z-[99999]">
            <ToastContainer
              position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}// ✅ add this here too
            />
</div>
          
          </form>
        </div>

        <div>
          <img
            src="/images/photu.png"
            className="w-[400px] h-[350px] ml-15"
            alt="form graphic"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
