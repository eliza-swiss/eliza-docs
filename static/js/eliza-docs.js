/**
 * ELIZA Documentation - JavaScript
 * Based on ELIZA Material Design System
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize MaterializeCSS Components
    initMaterialize();

    // Initialize Dark Mode
    initDarkMode();

    // Initialize Sidenav
    initSidenav();
});

/**
 * Initialize MaterializeCSS Components
 */
function initMaterialize() {
    // Collapsible (Accordion)
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles, {
        accordion: true
    });

    // Modals
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // Tooltips
    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);

    // Dropdown
    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns);
}

/**
 * Initialize Sidenav with ELIZA-style behavior
 */
function initSidenav() {
    var sidenav = document.getElementById('slide-out');
    var overlay = document.getElementById('sidenav-overlay');

    if (!sidenav) return;

    // Always initialize MaterializeCSS Sidenav for mobile support
    M.Sidenav.init(sidenav, {
        edge: 'left',
        draggable: true,
        onOpenStart: function() {
            if (overlay) overlay.classList.add('visible');
        },
        onCloseEnd: function() {
            if (overlay) overlay.classList.remove('visible');
        }
    });

    // Highlight active section in sidenav
    highlightActiveSection();
}

/**
 * Toggle Sidenav (Mobile)
 */
function toggleSidenav() {
    var sidenav = document.getElementById('slide-out');
    var overlay = document.getElementById('sidenav-overlay');

    // Try MaterializeCSS API first
    var instance = M.Sidenav.getInstance(sidenav);
    if (instance) {
        if (instance.isOpen) {
            instance.close();
        } else {
            instance.open();
        }
        return;
    }

    // Fallback to CSS class approach
    if (sidenav.classList.contains('open')) {
        closeSidenav();
    } else {
        sidenav.classList.add('open');
        if (overlay) overlay.classList.add('visible');
    }
}

/**
 * Close Sidenav
 */
function closeSidenav() {
    var sidenav = document.getElementById('slide-out');
    var overlay = document.getElementById('sidenav-overlay');

    // Try MaterializeCSS API first
    var instance = M.Sidenav.getInstance(sidenav);
    if (instance) {
        instance.close();
    }

    // Also handle custom CSS class approach as fallback
    sidenav.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
}

/**
 * Highlight active section in sidenav
 */
function highlightActiveSection() {
    var currentPath = window.location.pathname;
    var sidenavLinks = document.querySelectorAll('.sidenav a');

    sidenavLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && currentPath.includes(href) && href !== '/') {
            link.classList.add('active');

            // Open parent collapsible
            var collapsibleBody = link.closest('.collapsible-body');
            if (collapsibleBody) {
                var collapsibleLi = collapsibleBody.closest('li');
                if (collapsibleLi) {
                    collapsibleLi.classList.add('active');
                    collapsibleBody.style.display = 'block';

                    var header = collapsibleLi.querySelector('.collapsible-header');
                    if (header) {
                        header.classList.add('active');
                    }
                }
            }
        }
    });
}

/**
 * Dark Mode Functions
 */
function initDarkMode() {
    // Check for saved preference
    var savedTheme = localStorage.getItem('eliza-docs-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setDarkMode(true);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('eliza-docs-theme')) {
            setDarkMode(e.matches);
        }
    });
}

function toggleDarkMode() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setDarkMode(!isDark);
    localStorage.setItem('eliza-docs-theme', isDark ? 'light' : 'dark');
}

function setDarkMode(enabled) {
    var icon = document.getElementById('theme-icon');

    if (enabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) icon.textContent = 'light_mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (icon) icon.textContent = 'dark_mode';
    }
}

/**
 * Search Functions
 */
function openSearch() {
    var modal = document.getElementById('search-modal');
    if (modal) {
        var instance = M.Modal.getInstance(modal);
        if (instance) {
            instance.open();
            // Focus search input
            setTimeout(function() {
                var input = document.getElementById('search-input');
                if (input) input.focus();
            }, 200);
        }
    }
}

/**
 * Smooth scroll to anchor
 */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL without scroll
                history.pushState(null, null, href);
            }
        }
    });
});

/**
 * Copy code button for code blocks
 */
document.querySelectorAll('pre code').forEach(function(codeBlock) {
    var pre = codeBlock.parentNode;

    // Create copy button
    var button = document.createElement('button');
    button.className = 'btn-flat copy-btn';
    button.innerHTML = '<i class="material-icons tiny">content_copy</i>';
    button.title = 'Code kopieren';
    button.style.cssText = 'position: absolute; top: 8px; right: 8px; min-width: 0; padding: 4px;';

    // Position pre relative
    pre.style.position = 'relative';
    pre.appendChild(button);

    button.addEventListener('click', function() {
        navigator.clipboard.writeText(codeBlock.textContent).then(function() {
            button.innerHTML = '<i class="material-icons tiny">check</i>';
            setTimeout(function() {
                button.innerHTML = '<i class="material-icons tiny">content_copy</i>';
            }, 2000);
        });
    });
});

/**
 * Progress indicator for long pages
 */
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;

    // You could add a progress bar here if desired
});

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K: Open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }

    // Escape: Close sidenav (mobile)
    if (e.key === 'Escape') {
        closeSidenav();
    }
});

console.log('ELIZA Docs initialized');
