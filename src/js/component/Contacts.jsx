import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Button } from "./Button.jsx"
import Items from "./Items.jsx"

export const Contacts = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
            actions.getAgendas()
            console.log("consoleando")
    }, [])

    return (
        <>
            <Button />
            <div className="w-100 d-flex flex-column gap-3">
                {store.contacts.length > 0 && store.contacts.map(element => 
                    <Items
                    key={element.id}
                    name={element.name}
                    address={element.address}
                    phone={element.phone}
                    email={element.email}
                    id={element.id}
                    />
                )}


            </div>

        </>
    )
}