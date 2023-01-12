import React, { useState, useEffect } from "react";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";
import ManageBarOrders from "./ManageBarOrders";
import OrdersTable from "./OrdersTable";

export default function AdminManageOrders({ allOrders }) {
    ///ESTADOS LOCALES///

    const [localOrders, setLocalOrders] = useState([]);
    const [localOrdenamiento, setLocalOrdenamiento] = useState("-");

    /*useEffect(() => {
        setLocalOrders(allOrders);
    }, [allOrders]);

    //console.log(localOrders);

    useEffect(() => {
        let arr = orderBy(localOrders, [...localOrders]);
        setLocalOrders(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localOrders]);*/

    return (
        <div>
            <div>
                <ManageBarOrders
                    allOrders={allOrders}
                    localOrders={localOrders}
                    setLocalOrders={setLocalOrders}
                    localOrdenamiento={localOrdenamiento}
                    setLocalOrdenamiento={setLocalOrdenamiento}
                />
            </div>
            <OrdersTable localOrders={localOrders} />
        </div>
    );
}
