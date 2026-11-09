
import React, { useState } from 'react';
import { FaShareAlt, FaCheck } from 'react-icons/fa';

interface ShareButtonProps {
    title: string;
    text?: string;
    label?: string;
    className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, label = 'Share', className = '' }) => {
    const [copied, setCopied] = useState(false);

    const showCopied = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title, text, url });
                return;
            } catch (err) {
                // User cancelled the native share sheet, or it failed — fall through to the
                // clipboard/prompt fallback below so the click still does something visible.
            }
        }

        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(url);
                showCopied();
                return;
            } catch (err) {
                // Clipboard write blocked (e.g. no permission, or an insecure http:// origin
                // on a LAN IP) — fall through to the prompt fallback below.
            }
        }

        // Last resort: works in any browser/context with no permissions required, so a
        // click always does something instead of failing silently.
        window.prompt('Copy this link:', url);
    };

    return (
        <button
            type="button"
            onClick={handleShare}
            className={`flex items-center justify-center gap-2 w-full font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] border-2 border-ir-secondary text-ir-secondary hover:bg-ir-secondary hover:text-white ${className}`}
        >
            {copied ? <FaCheck size={16} /> : <FaShareAlt size={16} />}
            {copied ? 'Link Copied!' : label}
        </button>
    );
};

export default ShareButton;
