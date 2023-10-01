import React from "react";

const SignInP = () => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  return (
    <div>
      <div>
        <form action="">
          <input
            className="px-4 py-2 font-medium focus:outline-none"
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Enter the Email"
          />
          <input
            type="password"
            value={passowrd}
            onChange={(e) => {
              setpassowrd(e.target.value);
            }}
            placeholder="Enter the password"
          />
        </form>
      </div>
    </div>
  );
};

export default SignInP;
