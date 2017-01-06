import dropboxToken from '../secrets'

export const REQUEST_DIR = 'REQUEST_DIR'
export const UPDATE_WORKING_DIR = 'UPDATE_WORKING_DIR'

// Request Directory

export const requestDirectory = path => ({
   type: REQUEST_DIR,
   path
})

// Update Working Direcotry

export const updateWorkingDirectory = (path, files) => ({
   type: UPDATE_WORKING_DIR,
   path,
   files
})

// Fetch Directory

export const fetchDirectory = path => dispatch => {
   dispatch(requestDirectory(path))

   let headers = new Headers()
   headers.append(
      'Authorization',
      `Bearer ${dropboxToken}`
   )
   headers.append('Content-Type', 'application/json')

   return fetch('https://api.dropboxapi.com/2/files/list_folder', {
      method: 'POST',
      body: JSON.stringify({
         path,
         recursive: false
      }),
      headers
   })
   .then(res => res.json())
   .then(json => dispatch(updateWorkingDirectory(path, json.entries)))

}
