import React, { useState, useEffect, Component } from "react"; 
import {connect} from "react-redux"
import {fetchPokemons} from "./action"

import PokemonList from '../../components/PokemonList'

// import { setSEO } from '../../helper/seo'

// import PokemonService from "../service/pokemon";

class FrontPage extends Component {
  state = {
    reqPage: 1,
    maxDisplay: 0
  }

  componentDidMount(){
    this.props.fetchPokemons()
    // scroll page record
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = () => {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
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
   const { results, loading } = this.props



   
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

        <div className="row">

        {
          !loading? 
          (
            results.map((data,index) => (
            <div className="col-6 col-sm-6 col-lg-3 text-center">
              <PokemonList 
                key={index}
                url={data.url} 
                name={data.name} 
                />
            </div>
            ))
          ) : 
          <div className="text-center">
            <h1 className="my-5 py-5">Loading... </h1>
          </div> 
        }

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({listPokemons}) => {
  return {
    results: listPokemons.results,
    loading: listPokemons.loading
  }
}


export default connect(
  mapStateToProps,
  {fetchPokemons}
)(FrontPage)

