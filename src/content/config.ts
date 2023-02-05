import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()),
	}),
})
export const posts = {
	post: postCollection,
}
