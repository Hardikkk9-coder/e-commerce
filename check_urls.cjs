const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620012253295-c15b3e64a43f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598808503746-f34c53b93f3e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=800&auto=format&fit=crop'
];

async function checkUrls() {
  for (const url of urls) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
          console.log(`404: ${url}`);
        } else {
          console.log(`200: ${url}`);
        }
        resolve();
      }).on('error', (e) => {
        console.log(`ERR: ${url} - ${e.message}`);
        resolve();
      });
    });
  }
}

checkUrls();
