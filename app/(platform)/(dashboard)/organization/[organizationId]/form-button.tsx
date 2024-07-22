import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit">
            {pending ? <p>Loading...</p> : "Submit"}
        </Button>
    );
}