import React, { useState, useEffect, Component } from "react"; 
import {connect} from "react-redux"
import {fetchPokemons, filterPokemons} from "./action"

import PokemonList from '../../components/PokemonList'
import { Link } from 'react-router-dom';

// import { setSEO } from '../../helper/seo'

// import PokemonService from "../service/pokemon";
var allTypes = []

class FrontPage extends Component {
  state = {
    reqPage: 1,
    maxDisplay: 0,
  }

  componentDidMount(){
    this.props.fetchPokemons()
    // scroll page record
    window.addEventListener('scroll',this.handleScroll)

    this.props.filterPokemons()
  }

  handleScroll = () => {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('call on scroll')
      this.setState(({reqPage, maxDisplay}) => {
        this.props.fetchPokemons(reqPage)
        reqPage++;

        return {
          reqPage,
          maxDisplay: maxDisplay + window.innerHeight
        }
      })
    } 

  }


  render() {
   const { results, types, loading } = this.props

   const generatePokemonTypes = (filter) => {
        const parts = filter.url.split('/');
        const id = parts[parts.length - 2];
        const upperCase = encodeURIComponent(filter.name.toUpperCase());
        return <>
          <Link to={`/filter/${id}/${upperCase}`}>
            <img  className="py-1" style={{ maxWidth: "100px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/${id}.png`} 
              onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=`https://dummyimage.com/100x24/888888/ffffff&text=${upperCase}`;
              }}        
              />          
          </Link>
        </>
    }

   
    return (
      <div className='container py-5'>

   

        {/* <div className='row row-cols-auto'>
          <div className="col mb-3">
            <div className="btn border-2 border-info">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/1.png`} />
            </div>
          </div>
          <div className="col mb-3">
            <div className="btn border-2">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/2.png`} />
            </div>
          </div>
          <div className="col mb-3">
            <div className="btn border-2">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/3.png`} />
            </div>
          </div>
        </div> */}

        <div className="row row-cols-auto justify-content-center g-0 mb-3">

        {
          !loading? 
          (
            types.map((data,index) => (
                
                <div className="col" key={index}>
                    <div className="btn btn-sm border-2">
                    {/* border-info */}
                        {generatePokemonTypes(data)}
                    </div>
                </div>

            ))
          ) : 
          <>
            <div className="text-center py-5 my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h3 className='mt-3'>loading types..</h3>    
            </div> 
          </>
        }

        </div>

        <div className="row">

        {
          !loading? 
          (
            results.map((data,index) => (
            <div className="col-6 col-sm-6 col-lg-3 text-center" key={index}>
              <PokemonList 
                url={data.url} 
                name={data.name} 
                />
            </div>
            ))
          ) : 
          <>
            <div className="text-center py-5 my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h3 className='mt-3'>loading Pokemon..</h3>    
            </div> 
          </>
        }

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({listPokemons,filterPokemons}) => {
  console.log('filterPokemons : ',filterPokemons)
  console.log('listPokemons : ',listPokemons)

  if(allTypes.length==0){
    allTypes = listPokemons.types    
  }
  console.log('allTypes : ',allTypes)
  return {
    results: listPokemons.results,
    types: allTypes,
    loading: listPokemons.loading
  }
}


export default connect(
  mapStateToProps,
  {fetchPokemons,filterPokemons}
)(FrontPage)

