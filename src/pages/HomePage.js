import React from 'react';
import Article from '../components/Article';


const articles = [
    {id:1, title:'Nowe nagrody computer Science', author:'Beata Szczuka',text:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eius saepe dolor eveniet sunt id earum suscipit libero in quidem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eius saepe dolor eveniet sunt id earum suscipit libero in quidem.'},
    {id:2, title:'Procesor i jego przejmowanie funckji graficznych', author:'Radosław Mieszalkiewicz',text:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eius saepe dolor eveniet sunt id earum suscipit libero in quidem.'},
    {id:3, title:'Redystrybucja mocy procesora', author:'Szymon Niejakowicz',text:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eius saepe dolor eveniet sunt id earum suscipit libero in quidem.'},
]



const HomePage = () => {
    const articleList = articles.map(article => {
        return (
            <Article key={article.id} title={article.title} author={article.author} text={article.text} />
        )
    })
    return ( 
        <div className="home">
            <h1>Artykuły ze świata tech-science</h1>
            {articleList}
        </div>
     );
}
 
export default HomePage;