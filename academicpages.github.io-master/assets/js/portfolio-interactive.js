/**
 * Portfolio Interactive Components
 * Handles accordion toggle and image swap interactions
 * with full keyboard accessibility support
 */

(function () {
    'use strict';

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initAccordions();
        initImageSwap();
    }

    /**
     * Initialize accordion functionality
     */
    function initAccordions() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(function (header) {
            // Click event
            header.addEventListener('click', function () {
                toggleAccordion(this);
            });

            // Keyboard support (Enter and Space)
            header.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleAccordion(this);
                }
            });
        });
    }

    /**
     * Toggle accordion open/closed state
     * @param {HTMLElement} header - The accordion header button
     */
    function toggleAccordion(header) {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        const contentId = header.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return;

        // Toggle aria-expanded
        header.setAttribute('aria-expanded', !expanded);

        // Toggle content visibility
        if (expanded) {
            content.setAttribute('aria-hidden', 'true');
            content.hidden = true;
        } else {
            content.setAttribute('aria-hidden', 'false');
            content.hidden = false;
        }
    }

    /**
     * Initialize image swap on hover/focus
     */
    function initImageSwap() {
        const imageContainer = document.querySelector('.portfolio-interactive-images');

        if (!imageContainer) return;

        // Ensure container is focusable
        if (!imageContainer.hasAttribute('tabindex')) {
            imageContainer.setAttribute('tabindex', '0');
        }

        // Mouse events are handled by CSS hover
        // We just need to ensure keyboard focus works smoothly

        // Add visual feedback for keyboard users
        imageContainer.addEventListener('focus', function () {
            this.classList.add('keyboard-focused');
        });

        imageContainer.addEventListener('blur', function () {
            this.classList.remove('keyboard-focused');
        });

        // Optional: Add keyboard shortcut to trigger swap
        imageContainer.addEventListener('keydown', function (e) {
            // Space or Enter to manually trigger focus (which triggers CSS hover via :focus)
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                // Focus is already applied, CSS will handle the swap
            }
        });
    }

})();
