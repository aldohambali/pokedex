import React, { Component } from 'react'
import {connect} from "react-redux"
import {Row, Col} from "react-bootstrap"
import {detailPokemon} from "./action"


import { Link } from 'react-router-dom';
import Stat from '../../components/Stat';


class DetailPage extends Component {

  async componentDidMount(){
    const id = this.props.id
    console.log('componentDidMountid : ',id)
    if(id){
      await this.props.detailPokemon(id)
    //   const {seo} = this.props.detail;
      const dataDetail =  this.props.detail;
      console.log('dataDetail : ',dataDetail)
     
    }

  }

  render() {
    //const {content, featured_image, ga_type, title, author, read_time, date_gmt} = this.props;

    const {base_experience,name, weight, height, moves, sprites , stats, types} =  this.props.detail.detail;
    console.log('render dataDetail : ',this.props.detail.detail)
    console.log('sprites : ',sprites)
    console.log('stats : ',stats)
    console.log('types : ',types)

    const generatePokemonTypes = (types) => {
      const parts = types.type.url.split('/');
      const id = parts[parts.length - 2];
      return <>
        <img style={{ maxWidth: "130px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/${id}.png`} />
      </>
    }

    return (


      <div className="container pt-3 pt-md-4 pb-5 mb-5">
 
        <div className='py-2'>
          <Link to="/" className='btn bg-white border border-1 px-4 mb-3'>Back</Link>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='card text-center mb-3 shadow-sm'>
                <h1 className='py-2'>{name}</h1>
              </div>
          </div>
          <div className='col-12 col-md-4'>

              <div className='card mb-3 shadow-sm'>
                <div className='row'>
                  <div className='col-6'>
                    <img className='img-fluid' src={sprites?.front_default} />
                  </div>
                  <div className='col-6'>
                    <img className='img-fluid' src={sprites?.back_default} />
                  </div>
                </div>
              </div>

              <div className='card mb-3 shadow-sm'>
                <table className='table'>
                  <tr>
                    <th>Weight</th>
                    <td>:</td>
                    <td>{weight} lbs</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>:</td>
                    <td>{height}"</td>
                  </tr>
                  <tr>
                    <th>Base Experience</th>
                    <td>:</td>
                    <td>{base_experience} Exp</td>
                  </tr>
                </table>
              </div>

          </div>
          <div className='col-12 col-md-8'>

            <div className='card mb-3 shadow-sm container'>
              <div className='row row-cols-auto'>
              {
                  types.map((type, index) => ( 
                    <div className='py-2 col'>
                      {generatePokemonTypes(type)}
                    </div>
                    
                  ))
              }  
              </div>

            </div>

            <div className='card mb-3 shadow-sm container'>

              {
                stats.map((data, index) => ( 
                  <Stat
                    point={data}
                  />
                ))
              }  
                          
            </div>



          </div>
          <div className='col-12'>
            
            <div className='card mb-3 shadow-sm container'>
              <div className='row row-cols-auto'>
              {
                  moves.map((data, index) => ( 
                    <div className='py-2 col'>
                      <span class="badge rounded-pill bg-light text-dark">{data.move.name}</span>
                    </div>
                  ))
              }  
              </div>
            </div>
          </div>
        </div>

           
      </div>
    )
  }
}

const mapStateToProps = ({detailPokemon}) => {
  return {
    detail: detailPokemon
  }
}

export default connect(mapStateToProps, {detailPokemon})(DetailPage)
