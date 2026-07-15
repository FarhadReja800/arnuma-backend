export interface THomeBanner {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    linkUrl?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
