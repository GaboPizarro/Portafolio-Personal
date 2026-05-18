export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  photos: PhotoItem[];
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  photos: PhotoItem[];
  github?: string;
  demo?: string;
  year: string;
}

export interface VolunteerItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  photos: PhotoItem[];
}

export interface SportItem {
  id: string;
  sport: string;
  role: string;
  period: string;
  achievements: string[];
  description: string;
  photos: PhotoItem[];
}
