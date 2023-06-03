// chains/hello-world.ts
import { defineChain } from '@relevanceai/chain';

export default defineChain({
    title: 'Hello world!',
    params: {
        name: {
            type: 'string',
        },
    },
    setup({ params, step }) {
        const { name } = params;

        const { answer } = step('prompt_completion', {
            prompt: `Say hello to me! My name is: ${name}.`,
        });

        return { answer };
    },
});
