const fs = require('fs');
const path = require('path');

const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://blenkdev.fr/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://blenkdev.fr/contact</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://blenkdev.fr/services</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <!-- Ajoutez d'autres URLs ici -->
  </urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap.trim());
console.log('Sitemap generated!');
