import axios from 'axios';

export async function getNews(q = "Pais", freshness = "Day"){
    try {
        const response = await axios.get(`https://api.bing.microsoft.com/v7.0/news/search`, {
            params: {
                q,
                freshness,
                count: 60,
            },
            headers: {
                'Ocp-Apim-Subscription-Key': '5dfe3c8210c04ecb956b4dc17c7b3a39'
            }
        });
        return response.data.value;
        console.log('response desde la función', response.data.value)
    } catch (error) {
        console.error("Error en Bing News:", error);
    }
}