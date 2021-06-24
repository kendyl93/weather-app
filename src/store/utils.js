export const LOADING_STARTED = "LOADING_STARTED"
export const LOADING_FINISHED = "LOADING_FINISHED"

export const setLoadingStarted = () => ({
  type: LOADING_STARTED,
})

export const setLoadingFinished = () => ({
  type: LOADING_FINISHED,
})

const withLoading = async (dispatch, callback) => {
  dispatch(setLoadingStarted())
  await callback()
  dispatch(setLoadingFinished())
}

export default withLoading
