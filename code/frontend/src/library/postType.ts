// lib/types.ts
// export Interface for Image Data
export interface ImageData {
    url: string;
  }
  
  // export Interface for Author Data
  export interface Author {
    id: number; // Assuming each author has a unique ID
    name: string;
    email: string;
    avatar: ImageData; // Assuming the author has
  }
  
  // export Interface for Category Data
  export interface Category {
    documentId: string; // Assuming each category has a unique ID
    name: string;
    description: string; // Optional description
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    createdAt: string;
    heroImage: ImageData;
    slug: string;
    categories: Category[];
  }
  
  export interface UserBlogPostData {
    title: string;
    slug: string;
    description: string;
    content: string; //  rich markdown text
  }
  
  // Example response structure when fetching posts
  export interface BlogPostResponse {
    data: BlogPost[];
  }
  
  // Example response structure when fetching a single post
  export interface SingleBlogPostResponse {
    data: BlogPost; // The single blog post object
  }