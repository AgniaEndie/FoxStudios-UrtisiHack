import React, {useEffect, useState} from "react";
import {Org} from "../../models/Models";
import "./Organisation.scss"

interface props {
    org:Org
}

function Organisation(props: props) {
    return (
        <div>
            <h2>{props.org.uuid}</h2>
            <h2>{props.org.name}</h2>
            <h2>{props.org.status}</h2>
        </div>
    );
}

export default Organisation;
