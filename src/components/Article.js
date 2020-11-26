import React from 'react';

const styles = {
    marginTop: '40px',
    padding: '10px'
}

const Article = (props) => {
    return ( 
        <article style={styles}>
            <h3 style={{textTransform:"uppercase"}}>{props.title}</h3>
            <h4 style={{fontSize:'18px', margin:10}}>{props.author}</h4>
            <p>{props.text}</p>
        </article>
     );
}
 
export default Article;