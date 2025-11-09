import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'graphql-request';
import AnimatedPage from '../components/ui/AnimatedPage';
import { hygraph } from '../lib/hygraph.js';
import { Blog } from '../types';
import { FaUser, FaCalendarAlt, FaTag, FaArrowLeft } from 'react-icons/fa';

const GET_POST_QUERY = gql`
    query GetPost($slug: String!) {
        post(where: { slug: $slug }) {
            title
            date
            author
            category
            coverImage {
                url
            }
            blogDetails {
                html
            }
        }
    }
`;

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;
        
        const fetchPost = async () => {
            try {
                const { post: fetchedPost } = await hygraph.request<{ post: Blog }>(GET_POST_QUERY, { slug });
                setPost(fetchedPost);
            } catch (err) {
                setError('Failed to fetch the blog post.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <AnimatedPage>
                <div className="container mx-auto px-6 py-20 text-center">
                    <p className="text-lg text-gray-600">Loading post...</p>
                </div>
            </AnimatedPage>
        );
    }
    
    if (error) {
        return (
            <AnimatedPage>
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-bold text-ir-secondary">An Error Occurred</h1>
                    <p className="text-red-500 mt-4">{error}</p>
                    <Link to="/blog" className="mt-8 inline-flex items-center text-ir-primary font-semibold hover:underline">
                        <span className="mr-2"><FaArrowLeft /></span> Back to Blog
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

    if (!post) {
        return (
            <AnimatedPage>
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-bold text-ir-secondary">Post not found</h1>
                    <p className="text-gray-600 mt-4">The blog post you are looking for does not exist.</p>
                    <Link to="/blog" className="mt-8 inline-flex items-center text-ir-primary font-semibold hover:underline">
                        <span className="mr-2"><FaArrowLeft /></span> Back to Blog
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className="bg-white">
                <div className="container mx-auto px-6 py-12 md:py-20">
                    <article className="max-w-4xl mx-auto">
                        <header className="mb-8">
                            <div className="mb-4">
                               <Link to="/blog" className="inline-flex items-center text-ir-primary font-semibold hover:underline mb-4">
                                    <span className="mr-2"><FaArrowLeft /></span> Back to Blog
                               </Link>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-ir-secondary leading-tight mb-4">{post.title}</h1>
                            <div className="flex flex-wrap items-center text-gray-500 space-x-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaTag /></span>
                                    <span className="font-medium">{post.category}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaUser /></span>
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaCalendarAlt /></span>
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </header>
                        
                        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                            <img src={post.coverImage.url} alt={post.title} className="w-full h-auto object-cover" />
                        </div>

                        <div 
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.blogDetails.html }} 
                        />
                    </article>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default BlogDetailPage;