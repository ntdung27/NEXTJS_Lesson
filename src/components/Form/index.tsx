import React from "react";
import { Button, Input } from "..";

type Props = {};

const Form = (props: Props) => {
    return (
        <form className="flex justify-between items-center py-2">
            <Input />
            <Button>Add</Button>
        </form>
    );
};

export default Form;