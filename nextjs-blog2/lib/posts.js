import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id

    // example write data!
    // fs.writeFileSync(path.join(process.cwd(), 'tom.txt'), 'some data...')

    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

/**

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}

Or database!

import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}

 */

// export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory);
  
//     // Returns an array that looks like this:
//     // [
//     //   {
//     //     params: {
//     //       id: 'ssg-ssr'
//     //     }
//     //   },
//     //   {
//     //     params: {
//     //       id: 'pre-rendering'
//     //     }
//     //   }
//     // ]
//     return fileNames.map((fileName) => {
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, ''),
//         },
//       };
//     });
//   }
  