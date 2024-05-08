import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '../../store'

const SignIn = () => {
  const dispatch = useDispatch<Dispatch>();
  const { name } = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <button
        onClick={() => {
          dispatch.auth.setName("ain ul haq");
        }}
      >Click here</button>

      <div> name =  {name} </div>
    </div>
  )
}

export default SignIn