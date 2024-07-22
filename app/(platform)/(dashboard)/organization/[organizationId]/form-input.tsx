import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
    errors?: {
        title?: string[];
    };
}

export const FormInput = ({ errors }: FormInputProps) => {
    const { pending } = useFormStatus();
    return (
        <>
            <Input
                type="text"
                name='title'
                id='title'
                placeholder='Enter a board title'
                className='border-black border p-1'
                disabled={pending}
            />
            {errors?.title && (
                <div>
                    {errors.title.map((error, index) => (
                        <p key={index} className='text-red-500'>
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};
