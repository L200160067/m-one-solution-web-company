const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function refactorFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Add 'use client'
    if (!content.startsWith('"use client";')) {
        content = '"use client";\n\n' + content;
    }

    // Replace react-router-dom imports
    if (content.includes("from 'react-router-dom'")) {
        if (content.includes('useLocation')) {
            content = content.replace(/import\s+\{\s*Link,\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"];?/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
            content = content.replace(/import\s+\{\s*useLocation,\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
            // Change useLocation() usage
            content = content.replace(/const\s+location\s*=\s*useLocation\(\);?/, "const pathname = usePathname();");
            content = content.replace(/location\.pathname/g, "pathname");
        } else if (content.includes('useParams')) {
            // Not mostly in components but just in case
        } else {
            content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/, "import Link from 'next/link';");
        }
    }

    // Replace Link 'to' with 'href'
    content = content.replace(/<Link\s+to=/g, '<Link href=');
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');

    // Remove Helmet imports and usage just in case any component has it
    if (content.includes('react-helmet-async')) {
        content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];?\n?/, "");
        content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, "");
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Refactored: ${path.basename(filePath)}`);
    } else {
        console.log(`Unchanged: ${path.basename(filePath)}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '__tests__') {
                processDirectory(fullPath);
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            refactorFile(fullPath);
        }
    }
}

processDirectory(componentsDir);

// Note: Ensure Navbar.tsx specific useLocation updates are completely correct
