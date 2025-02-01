import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';

export const fetchAllPosts = async () => {
    const pb = new PocketBase(process.env.BACKEND_URL);
    const records = await pb.collection('posts').getFullList({
        sort: 'created',
    });
    return records;
}

export const fetchPostBySlug = async (slug: string) => {
    const pb = new PocketBase(process.env.BACKEND_URL);
    const record = await pb.collection('posts').getFirstListItem(`slug="${slug}"`, {
        expand: 'author'
    });
    return record;
};