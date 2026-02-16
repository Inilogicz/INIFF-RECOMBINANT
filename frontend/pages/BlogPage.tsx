import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'graphql-request';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { hygraph } from '../lib/hygraph.js';
import { Blog } from '../types';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
// import { BLOG_POSTS } from '../constants'; // No longer needed

const GET_POSTS_QUERY = gql`
    query GetPosts {
        iniffBlogs(orderBy: date_DESC) {
            slug
            title
            excerpt
            date
            author
            category
            coverImage {
                url
            }
        }
    }
`;

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Use the correct query name 'iniffBlogs'
                const { iniffBlogs: fetchedPosts } = await hygraph.request<{ iniffBlogs: Blog[] }>(GET_POSTS_QUERY);
                setPosts(fetchedPosts);
            } catch (err) {
                setError('Failed to fetch blog posts. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <div className="text-center text-gray-600">Loading posts...</div>;
        }

        if (error) {
            return <div className="text-center text-red-500">{error}</div>;
        }

        if (posts.length === 0) {
            return <div className="text-center text-gray-600">No blog posts found.</div>;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                    <AnimatedSection key={post.slug} delay={index * 0.1}>
                        <Link to={`/blog/${post.slug}`} className="block group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform group-hover:-translate-y-2 transition-transform duration-300 group-hover:shadow-2xl flex flex-col">
                                <div className="overflow-hidden h-56 bg-gray-200 flex items-center justify-center">
                                    {post.coverImage?.url ? (
                                        <img src={post.coverImage.url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    ) : (
                                        <span className="text-gray-400">No Image</span>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="inline-block bg-ir-primary text-white px-3 py-1 text-sm font-semibold rounded-full mb-4 self-start">{post.category || 'General'}</span>
                                    <h3 className="text-xl font-bold text-ir-secondary mb-3 flex-grow">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt || 'No excerpt available.'}</p>
                                    <div className="mt-auto border-t border-gray-200 pt-4 flex justify-between items-center text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <span className="mr-2 text-ir-primary"><FaUser /></span>
                                            <span>{post.author || 'Anonymous'}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2 text-ir-primary"><FaCalendarAlt /></span>
                                            <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
            ))}
            </div>
        );
    };

    return (
        <AnimatedPage>
            <PageHeader
                title="Our Blog"
                subtitle="Insights and updates from the world of biotechnology and scientific innovation."
            />
            <div className="py-20 md:py-24 bg-ir-light">
                <div className="container mx-auto px-6">
                    {renderContent()}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default BlogPage;