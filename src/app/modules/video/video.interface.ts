

export interface TVideo {
  title: string;
  videoUrl: string;
  isActive?: boolean;
}

export interface THomeVideo {
  videos: TVideo[];
}