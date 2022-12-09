import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole, getRoles } from "../../api/roles";
import FormRole from "../../components/admin/FormRole";
import { NavBar } from "../../components/admin/NavBar";

export default function RolesAdmin() {
  // get the roles from the roles' reducer
  const roles = useSelector(state => state.rolesReducer);
  const dispatch = useDispatch();

  // rehydrate the roles when on dispatch action
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);
  return (
    <div className="flex">
      <NavBar />
      <div>
        <h2>Roles</h2>
        <FormRole />
        <div className="flex justify-around">
          {roles.map((role, i) => {
            return (
              <div key={i}>
                <p>{role.libelle}</p>
                <button
                  className="bg-red text-white"
                  onClick={() => dispatch(deleteRole(role._id))}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
