import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRole } from "../../api/roles";

export default function FormRole() {
  const dispatch = useDispatch();
  const initRole = {
    libelle: "",
  };
  const [role, setRole] = useState(initRole);
  const handleChange = (e) => {
    setRole({ ...role, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRole(role));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={"text"}
          placeholder="role libelle"
          name="libelle"
          value={role.libelle}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit"  className=" bg-green-400 w-48 mx-8 rounded-lg">
          Créer un role
        </button>
      </form>
    </div>
  );
}
