class PostsFilter {
    // filtering posts from all posts in DB to posts for today videos
    filterMainVideos(posts) {
        let postsMain = [];
        for (let i = posts.length - 1; i > posts.length - 4; i = i - 1) {
            postsMain.unshift(posts[i]);
        }
        return postsMain;
    }

    // choose random posts from all posts in DB to posts for main posts instead today videos
    randomMainVideos(posts) {
        let postsMain = [];
        let usedIndex = [];
        let index = 0;
        for (let i = posts.length - 1; i > posts.length - 4; i = i - 1) {
            index = Math.trunc(Math.random() * posts.length);
            while (usedIndex.includes(index)) {
                index = Math.trunc(Math.random() * posts.length);
            }
            usedIndex.push(index);
            postsMain.unshift(posts[index]);
        }
        return postsMain;
    }

    // filtering posts from all posts in DB to posts for accordion posts
    filterAccordionVideos(posts) {
        const videosPerDay = 3;
        const accordsPerPage = 3;
        const videosPerPage = videosPerDay * accordsPerPage;
        let counterPosts = 0;
        let counterAccords = 0;
        const postsSet = [[]];

        for (let i = posts.length - 1 - videosPerDay; i > posts.length - 1 - videosPerDay - videosPerPage; i = i - 1) {
            if (counterPosts + 1 !== videosPerDay) {
                postsSet[counterAccords].unshift(posts[i]);
                counterPosts += 1;
            } else {
                postsSet[counterAccords].unshift(posts[i]);
                counterPosts = 0;
                counterAccords += 1;
                postsSet.push([]);
            }
        }

        postsSet.pop();
        return postsSet;
    }
}

export const postsFilter = new PostsFilter();
