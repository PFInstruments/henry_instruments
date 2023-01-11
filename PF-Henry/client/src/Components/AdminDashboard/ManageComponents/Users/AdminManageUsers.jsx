import React, { useState, useEffect } from "react";
import /* useDispatch*/ "react-redux";
import ManageBarUsers from "./ManageBarUsers";
import UsersTable from "./UsersTable";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";

export default function AdminManageUsers({ allUsers }) {
    //  const dispatch = useDispatch();

    /// ESTADOS LOCAL ///
    const [localUsers, setLocalUsers] = useState([]);
    //     const [localCategories, setLocalCategories] = useState([]);
    const [localOrder, setLocalOrder] = useState("-");

    // useEffect(() => {
    //     setLocalCategories(allCategories.categories);
    // }, [allCategories]);

    /// HOOKS //
    useEffect(() => {
        setLocalUsers(allUsers);
    }, [allUsers]);
    console.log(localUsers);

    useEffect(() => {
        let arr = orderBy(localOrder, [...localUsers]);
        setLocalUsers(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localOrder]);

    return (
        <div>
            <div>
                <ManageBarUsers allUsers={allUsers} />
            </div>
            <UsersTable localUsers={localUsers} setLocalUsers={setLocalUsers} />
        </div>
    );
}
