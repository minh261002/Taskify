"use server"

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
    errors?: {
        title: string[];
    },
    message?: string | null;
}

const CreateBroad = z.object({
    title: z.string().min(3, {
        message: 'Title must be at least 3 characters long',
    }),
});

export async function create(prevState: State, formData: FormData) {
    const validateFields = CreateBroad.safeParse({
        title: formData.get('title'),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "There was an error creating the board",
        }
    }

    const { title } = validateFields.data;

    try {
        await db.board.create({
            data: {
                title,
            }
        })
    } catch (error) {
        return {
            message: "There was an error creating the board",
        }
    }

    revalidatePath('/organization/org_2jacBlnWoMoun3TJanXjDF0SGdc');
    redirect('/organization/org_2jacBlnWoMoun3TJanXjDF0SGdc');
}