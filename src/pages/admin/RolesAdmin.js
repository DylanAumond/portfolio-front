import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole, getRoles } from "../../api/roles";
import FormRole from "../../components/admin/FormRole";

export default function RolesAdmin() {
  // get the roles from the roles' reducer
  const roles = useSelector((state) => state.rolesReducer);
  const dispatch = useDispatch();

  // rehydrate the roles when on dispatch action
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);
  
  return (
    <div>
      <h2>Roles</h2>
      {/* form to add/update a role */}
      <FormRole />

      <div className="flex justify-around">
        {roles.map((role, i) => {
          return (
            <div key={i}>
              <p>{role.libelle}</p>
              <button
                className="bg-red-600 text-white"
                onClick={() => dispatch(deleteRole(role._id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
