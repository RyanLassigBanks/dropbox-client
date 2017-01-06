import {REQUEST_DIR, UPDATE_WORKING_DIR} from '../actions/actions'

export default (state = { path: [''], currentFiles: [], active: '' }, action) => {
   switch (action.type) {
      case REQUEST_DIR:
         // TODO: This would trigger a spinner of some kind
         return state
      case UPDATE_WORKING_DIR:
         let path = action.path.split('/')
         return {
            path,
            currentFiles: action.files,
            currentDirectory: path[path.length - 1]
         }
      default:
         return state
   }
}
