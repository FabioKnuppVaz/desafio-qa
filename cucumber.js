module.exports = {
    default: `--publish 
    --format-options '{"snippetInterface": "synchronous"}'
    --world-parameters 
    '
    {
        "baseURL": "https://api.themoviedb.org/3",
        "timeout": 5000,
        "headers": {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM0ZGQ5ODU1ODAyYTY1NGJkNDE5ZWVkMWUzYTUxMSIsInN1YiI6IjYzMjEzYzJmMjcxNjcxMDA5MWNlNGZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CAmEYps1XJ19aN1HzKujWrdLuarfmVdrnMW6NJBNAUU"
        },
        "responseType": "json",
        "responseEncoding": "utf8"
     }
    '`
}