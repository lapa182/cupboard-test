import axios from "axios";
import * as actions from './categories/actions';

const error = err => console.log(err)

export function loadBlog() {
    return dispatch => {
        dispatch(actions.categoriesLoading());
        axios.get('')
            .then(({ res }) => {
                dispatch(actions.loadCategoriesSuccess(res));
            })
            .catch(error => {
                console.log(error)
                dispatch(actions.categoriesLoading(false));
            });
    }
}