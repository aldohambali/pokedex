import React, {  Component } from "react"; 
import {connect} from "react-redux"
import {filterDetailPokemons} from "./action"
import PokemonList from "../../components/PokemonList";
import { Link } from "react-router-dom";

class FilterPage extends Component {
  state = {
    reqPage: 1,
    maxDisplay: 0
  }

  async componentDidMount(){
    const id = this.props.id
    console.log('componentDidMountid : ',id)
    if(id){
      await this.props.filterDetailPokemons(id)
      const dataDetail =  this.props;
      console.log('this.props : ',this.props)
      
      const {pokemon} = this.props;
      console.log('this.props pokemon : ',pokemon)
    }

  }


  render() {
   const { loading, detail,id, text } = this.props
    console.log('this.props detail : ',detail)
    console.log('this.props loading : ',loading)
   const generatePokemonTypes = (filter) => {
        const parts = filter.url.split('/');
        const id = parts[parts.length - 2];
        const upperCase = encodeURIComponent(filter.name.toUpperCase());
        return <>
            <img style={{ maxWidth: "130px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/${id}.png`} 
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=`https://dummyimage.com/130x31/888888/ffffff&text=${upperCase}`;
            }}        
            />
        </>
    }


   
    return (
      <div className="container pt-3 pt-md-4 pb-5 mb-5">
 
        <div className='py-2'>
          <Link to="/" className='btn bg-white border border-1 px-4 mb-3'>Back</Link>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <img  className="py-1" style={{ maxWidth: "130px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/${id}.png`} 
              onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src=`https://dummyimage.com/130x31/888888/ffffff&text=${text}`;
              }}        
              />   
          </div>
        </div>
   
        <div className="row row-cols-auto">

        {
          !loading? 
          (
            (
              detail && detail.length>0 ?
                detail.map((data,index) => (
                  <div className="col-6 col-sm-6 col-lg-3 text-center" key={index}>
                    <PokemonList 
                      url={data.url} 
                      name={data.name} 
                      />
                  </div>
                )) : 
                <div className="col-12 text-center">
                  <p className="">No pokomon for type {text} </p>
                </div> 
            )

          ) : 
          <div className="col-12 text-center">
            <>
              <div className="text-center py-5 my-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h3 className='mt-3'>loading Filter Pokemon..</h3>    
              </div> 
            </>
          </div> 
        }

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({filterDetailPokemons}) => {
  console.log('filterDetailPokemons index ',filterDetailPokemons)
  return {
    detail: filterDetailPokemons.detail,
    loading: filterDetailPokemons.loading
  }
}


export default connect(
  mapStateToProps,
  {filterDetailPokemons}
)(FilterPage)

