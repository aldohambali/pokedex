import React from "react"
import {Row, Col, Card} from "react-bootstrap"
// import moment from "moment"
import { Link } from 'react-router-dom';

export default ({name, url}) => {

    const parts = url.split('/');
    const id = parts[parts.length - 2];


   return (
      <Card className="p-2 p-md-3 mb-3 border-0 shadow">       
         <Row>
            {/* <Col xs={2} md={4}>
               <Link to={`/${url}`}>
                  <img style={{width: "100%"}} src={content.image} role="presentation"/>
               </Link>
            </Col>
            <Col xs={10} md={8}>         
               <div>
                  <Link to={`/${url}`} className="title">
                    <h2><strong>{content.title}</strong></h2>
                  </Link>
                  <div style={{margin:"18px 0"}} className="desc d-none d-sm-block"> {content.description} </div>

                  <Row>
                     <Col className="info">
                        <img 
                            className="avatar me-2"
                           src={author.avatar_url} 
                           alt={author.display_name}/> 
                        <a href={author.author_url} target="_blank">{author.display_name}</a>
                        <span> · ss· {readTime} min read</span>
                     </Col>
                  </Row>
               </div>
            </Col> */}

            <Col sm={12}>
               <Link to={`/detail/${id}`}>
                  <img style={{width: "100%"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src=`https://dummyimage.com/400x400/ffffff/000&text=${name}`;
                     }}     
                  />
                   
               </Link>
            </Col>
            <Col sm={12}>         
               <div>
                  <Link to={`/detail/${id}`} className="btn btn-outline-secondary w-100">
                    <strong className="text-uppercase">{name}</strong>
                  </Link>

               </div>
            </Col>
         </Row>
      </Card>
   )
}