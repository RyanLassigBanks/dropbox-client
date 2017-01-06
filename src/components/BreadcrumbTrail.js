import React from 'react'
import { connect } from 'react-redux'
import { fetchDirectory } from '../actions/actions'
import BreadcrumbLink from './BreadcrumbLink'

const BreadcrumbTrail = ({ path, currentDirectory, onClickGen }) => (
   <div>
      {
         path.map(
            (name, idx) => (
               <span key={idx}>
                  { idx ? ' > ' : '' }
                  <BreadcrumbLink
                     name={name ? name : 'Dropbox'}
                     current={name === currentDirectory}
                     onClick={onClickGen(path, idx)}/>
               </span>
            )
         )
      }
   </div>
)

const mapStateToProps = ({ path, currentDirectory }) => ({ path, currentDirectory })

const mapDispatchToProps = (dispatch) => ({
   onClickGen: (path, idx) => e => {
      e.preventDefault()
      dispatch(fetchDirectory(path.slice(0, idx + 1).join('/')))
   }
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(BreadcrumbTrail)
