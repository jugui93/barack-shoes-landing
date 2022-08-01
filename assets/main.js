const API =' https://pexelsdimasv1.p.rapidapi.com/videos/search?query=shoes&per_page=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f917000010000019f17f776a01546178b0c215de3dd2b74',
		'X-RapidAPI-Key': 'a49db3be34msh428cebc45c41a8cp13ce64jsn2c9d25b81520',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

async function fecthData ( urlApi ) {
    const response = await fetch ( urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fecthData(API);
        let view = `
        ${videos.videos.map( video => 
            `<div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md 
                    overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.image}" alt="${video.url}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        By ${video.user.name}
                    </h3>
                </div>
            </div>`).slice(0,8).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();