import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { useFirestore } from "../components/UseFirestore";


const stories = storiesOf('App test', module)

stories.add('App', () => {
    return (<>
        <p>HIIII</p>
    </>)
})