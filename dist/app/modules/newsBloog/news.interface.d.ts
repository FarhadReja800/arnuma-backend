export interface TBloogNews {
    title: string;
    slug: string;
    content: string;
    image: string;
    category: string;
    tags: string[];
    isPopular?: boolean;
    views?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
