import * as types from './types'

export function loadCategoriesSuccess(list) {
    return { type: types.LOAD_CATEGORIES_SUCCESS, list }
}

export function categoriesLoading(isLoading = true) {
    return { type: types.CATEGORIES_LOADING, isLoading }
}