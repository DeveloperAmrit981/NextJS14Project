// const posts = [
//     {
//         "user_id": 7,
//         "id": 1,
//         "title": "The Joy of Painting",
//         "body": "Here, we provide insights on... The Art of Cooking"
//     },
//     {
//         "user_id": 3,
//         "id": 2,
//         "title": "The Art of Cooking",
//         "body": "Here, we provide insights on... Tech Trends in 2024"
//     },
//     {
//         "user_id": 7,
//         "id": 3,
//         "title": "Home Decoration Ideas",
//         "body": "We're excited to share our thoughts on... The World of Music"
//     },
//     {
//         "user_id": 5,
//         "id": 4,
//         "title": "Sports in Modern Times",
//         "body": "In this post, we'll explore... Photography Basics"
//     },
//     {
//         "user_id": 2,
//         "id": 5,
//         "title": "The World of Music",
//         "body": "We're excited to share our thoughts on... Learning to Code"
//     },
//     {
//         "user_id": 3,
//         "id": 6,
//         "title": "Traveling the World",
//         "body": "This piece is a reflection on... The Joy of Painting"
//     },
//     {
//         "user_id": 9,
//         "id": 7,
//         "title": "The Art of Cooking",
//         "body": "This article covers... Traveling the World"
//     },
//     {
//         "user_id": 6,
//         "id": 8,
//         "title": "Tech Trends in 2024",
//         "body": "This is an interesting blog post about... Fitness and Health"
//     },
//     {
//         "user_id": 2,
//         "id": 9,
//         "title": "Photography Basics",
//         "body": "Today, we're discussing... Mindfulness and Meditation"
//     },
//     {
//         "user_id": 4,
//         "id": 10,
//         "title": "Sports in Modern Times",
//         "body": "This is an interesting blog post about... Gardening Tips"
//     },
//     {
//         "user_id": 2,
//         "id": 11,
//         "title": "Exploring the Great Outdoors",
//         "body": "Today, we're discussing... A Guide to Fashion"
//     },
//     {
//         "user_id": 1,
//         "id": 12,
//         "title": "Poetry and Literature",
//         "body": "Let's dive deep into the topic of... Movie Reviews"
//     },
//     {
//         "user_id": 3,
//         "id": 13,
//         "title": "Poetry and Literature",
//         "body": "Here, we provide insights on... Book Recommendations"
//     },
//     {
//         "user_id": 1,
//         "id": 14,
//         "title": "The Art of Cooking",
//         "body": "Today, we're discussing... Home Decoration Ideas"
//     },
//     {
//         "user_id": 3,
//         "id": 15,
//         "title": "Poetry and Literature",
//         "body": "This article covers... Sports in Modern Times"
//     },
//     {
//         "user_id": 3,
//         "id": 16,
//         "title": "The Joy of Painting",
//         "body": "In this post, we'll explore... History Mysteries"
//     },
//     {
//         "user_id": 6,
//         "id": 17,
//         "title": "Home Decoration Ideas",
//         "body": "Let's dive deep into the topic of... Poetry and Literature"
//     },
//     {
//         "user_id": 9,
//         "id": 18,
//         "title": "History Mysteries",
//         "body": "This is an interesting blog post about... Science for Beginners"
//     },
//     {
//         "user_id": 6,
//         "id": 19,
//         "title": "Traveling the World",
//         "body": "In this post, we'll explore... Economics Explained"
//     },
//     {
//         "user_id": 1,
//         "id": 20,
//         "title": "Fitness and Health",
//         "body": "We're excited to share our thoughts on... Exploring the Great Outdoors"
//     }
// ]



// const users = [
//     {
//         "user_id": 1,
//         "name": "Alice Johnson"
//     },
//     {
//         "user_id": 2,
//         "name": "Bob Smith"
//     },
//     {
//         "user_id": 3,
//         "name": "Carol Martinez"
//     },
//     {
//         "user_id": 4,
//         "name": "David Lee"
//     },
//     {
//         "user_id": 5,
//         "name": "Eva Brown"
//     },
//     {
//         "user_id": 6,
//         "name": "Frank Wilson"
//     },
//     {
//         "user_id": 7,
//         "name": "Grace Taylor"
//     },
//     {
//         "user_id": 8,
//         "name": "Henry Davis"
//     },
//     {
//         "user_id": 9,
//         "name": "Ivy Moore"
//     }
// ]

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    
    try {
        await connectToDb(); 
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts");
    }
};

export const getPost = async (slug) => {
    try {
        await connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error("Failed to fetch post");
    } 
};

export const getUser = async (id) => {
    noStore();
    try {
        await connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
};

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
    }
};

