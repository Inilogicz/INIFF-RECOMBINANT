import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'graphql-request';
import AnimatedPage from '../components/ui/AnimatedPage';
import { hygraph } from '../lib/hygraph.js'; // Ensure this path is correct
import { Blog } from '../types'; // Ensure your Blog type includes blogDetails: { html: string }
import { FaUser, FaCalendarAlt, FaTag, FaArrowLeft } from 'react-icons/fa';

// GraphQL query to fetch a single blog post by its slug
// This assumes the 'slug' field in your Hygraph 'IniffBlog' model is marked as UNIQUE.
const GET_POST_QUERY = gql`
    query GetPost($slug: String!) {
        iniffBlog(where: { slug: $slug }) {
            slug
            title
            excerpt
            date
            author
            category
            coverImage {
                url
            }
            blogDetails { # This field should contain the rich text/HTML content
                html
            }
        }
    }
`;

const BlogDetailPage: React.FC = () => {
    // useParams to extract the slug from the URL
    const { slug } = useParams<{ slug: string }>();

    // State variables for the blog post data, loading status, and errors
    const [post, setPost] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect hook to fetch data when the component mounts or slug changes
    useEffect(() => {
        // If no slug is available in the URL, set error and stop loading
        if (!slug) {
            setLoading(false);
            setError('No slug provided for the blog post.');
            return;
        }
        
        const fetchPost = async () => {
            try {
                // Fetch the blog post using the GET_POST_QUERY and the slug variable
                // The response will have the single blog post under 'iniffBlog'
                const { iniffBlog } = await hygraph.request<{ iniffBlog: Blog }>(GET_POST_QUERY, { slug });
                setPost(iniffBlog);
            } catch (err) {
                // Handle any errors during the fetch operation
                setError('Failed to fetch the blog post. Please check your internet connection or the blog URL.');
                console.error("Error fetching blog post:", err);
            } finally {
                // Set loading to false once the fetch is complete (success or failure)
                setLoading(false);
            }
        };

        fetchPost(); // Execute the fetch function
    }, [slug]); // Dependency array: re-run useEffect if the slug changes

    // --- Conditional Rendering based on loading, error, or post state ---

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
        // This case handles when loading is false, no error, but no post was found (e.g., invalid slug)
        return (
            <AnimatedPage>
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-bold text-ir-secondary">Post not found</h1>
                    <p className="text-gray-600 mt-4">The blog post you are looking for does not exist or has been removed.</p>
                    <Link to="/blog" className="mt-8 inline-flex items-center text-ir-primary font-semibold hover:underline">
                        <span className="mr-2"><FaArrowLeft /></span> Back to Blog
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

    // --- Prepare data for rendering with fallback values ---
    // If 'category' is an array, take the first element, otherwise default to 'Uncategorized'
    const categoryName = post.category && post.category.length > 0 ? post.category[0] : 'Uncategorized';
    const authorName = post.author || 'Anonymous'; // Default author if null
    const formattedDate = post.date 
        ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
        : 'No date available'; // Default date if null

    // --- Main component rendering ---
    return (
        <AnimatedPage>
            <div className="bg-white">
                <div className="container mx-auto px-6 py-12 md:py-20">
                    <article className="max-w-4xl mx-auto">
                        <header className="mb-8">
                            <div className="mb-4">
                               {/* Back to Blog link */}
                               <Link to="/blog" className="inline-flex items-center text-ir-primary font-semibold hover:underline mb-4">
                                    <span className="mr-2"><FaArrowLeft /></span> Back to Blog
                               </Link>
                            </div>
                            {/* Blog Post Title */}
                            <h1 className="text-3xl md:text-5xl font-extrabold text-ir-secondary leading-tight mb-4">{post.title}</h1>
                            {/* Metadata: Category, Author, Date */}
                            <div className="flex flex-wrap items-center text-gray-500 space-x-4">
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaTag /></span>
                                    <span className="font-medium">{categoryName}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaUser /></span>
                                    <span>{authorName}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-ir-accent"><FaCalendarAlt /></span>
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </header>
                        
                        {/* Cover Image - conditionally rendered only if URL exists */}
                        {post.coverImage?.url && (
                            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                                <img src={post.coverImage.url} alt={post.title} className="w-full h-auto object-cover" />
                            </div>
                        )}

                        {/* Blog Details/Content - using dangerouslySetInnerHTML for rich text HTML */}
                        {/* Conditionally rendered only if blogDetails.html exists */}
                        {post.blogDetails?.html ? (
                            <div 
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.blogDetails.html }} 
                            />
                        ) : (
                             <div className="text-gray-500 italic">No detailed content available for this post.</div>
                        )}
                    </article>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default BlogDetailPage;