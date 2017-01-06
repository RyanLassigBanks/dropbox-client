import React from 'react'
import { fetchDirectory } from '../actions/actions'
import { connect } from 'react-redux'

const FileList = ({ path, files, onClick }) => (
   <ul>
      {
         files.map(
            file => file['.tag'] === 'folder'
               ? <li key={file.id}><a href='#' onClick={onClick(path)}>{file.name}</a></li>
               : <li key={file.id}>{file.name}</li>
         )
      }
   </ul>
)

const mapStateToProps = ({ currentFiles, path }) => ({
   files: currentFiles,
   path
})

const mapDispatchToProps = (dispatch) => ({
   onClick: path => e => {
      e.preventDefault()
      let dir = e.target.textContent
      dispatch(fetchDirectory([...path, dir].join('/')))
   }
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(FileList)
