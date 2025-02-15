import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = ({category}) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0);

   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

  const getData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=1&pageSize=9`
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false)
    console.log(data)

  }

  const handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page-1}&pageSize=9`
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
    setPage(page-1)
  }


  const handleNextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page+1}&pageSize=9`
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
    setPage(page+1)
  }


  useEffect(() => {
    
    getData();
  },[category])

  return (
      <>
      <h1 className="text-center mt-5 mb-5"><span>NewsNow</span> - <span className="badge bg-dark">{capitalizeFirstLetter(category)} Headlines</span></h1>
      {loading && <Spinner />}
      <div className="container mt-4">
        <div className="row">
            {articles.map((news,index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
        </div>
        <div className="container d-flex justify-content-between p-4">
          <button type="button" class="btn btn-dark" onClick={handlePrevClick}>&laquo; Previous</button>
          <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &raquo;</button>
        </div>

        </div>    
      </>
    
  )
}

export default News